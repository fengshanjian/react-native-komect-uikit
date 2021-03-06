/**
 * @Author: will
 * @Date:   2017-08-09T23:33:32+08:00
 * @Filename: Select.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-12T17:11:08+08:00
 */



// Select.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';

import Theme from '../themes/Theme';
import PullPicker from '../PullPicker/PullPicker';
import PopoverPicker from '../PopoverPicker/PopoverPicker';

export default class Select extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    size: PropTypes.oneOf(['lg', 'md', 'sm']),
    value: PropTypes.any,
    valueStyle: Text.propTypes.style,
    items: PropTypes.array,
    getItemValue: PropTypes.func, //(item, index) 选择项值，item=items[index]，为空时直接使用item
    getItemText: PropTypes.func, //(item, index) return display text of item, item=items[index], use item when it's null
    pickerType: PropTypes.oneOf(['auto', 'pull', 'popover']),
    pickerTitle: PropTypes.string, //PullPicker only
    editable: PropTypes.bool,
    iconTintColor: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    onSelected: PropTypes.func, //(item, index)
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
    size: 'md',
    editable: true,
    pickerType: 'auto',
  };

  measureInWindow(callback) {
    this.refs.selectView && this.refs.selectView.measureInWindow(callback);
  }

  get selectedIndex() {
    let {value, items, getItemValue} = this.props;
    if (items instanceof Array) {
      if (getItemValue) {
        for (let i = 0; i < items.length; ++i) {
          if (getItemValue(items[i], i) === value) return i;
        }
      } else {
        for (let i = 0; i < items.length; ++i) {
          if (items[i] === value) return i;
        }
      }
    }
    return -1;
  }

  get valueText() {
    let {value, items, getItemValue, getItemText} = this.props;
    let text = value;
    if (getItemText && items instanceof Array) {
      if (getItemValue) {
        for (let i = 0; i < items.length; ++i) {
          if (getItemValue(items[i], i) === value) {
            text = getItemText(items[i], i);
            break;
          }
        }
      } else {
        for (let i = 0; i < items.length; ++i) {
          if (items[i] === value) {
            text = getItemText(items[i], i);
            break;
          }
        }
      }
    }
    return text ? `${text}` : text;
  }

  buildProps() {
    let {style, size, value, valueStyle, disabled, iconTintColor, placeholder, placeholderTextColor, ...others} = this.props;

    //style
    let borderRadius, fontSize, paddingTop, paddingBottom, paddingLeft, paddingRight, height, iconSize;
    switch (size) {
      case 'lg':
        borderRadius = Theme.selectBorderRadiusLG;
        fontSize = Theme.selectFontSizeLG;
        paddingTop = Theme.selectPaddingTopLG;
        paddingBottom = Theme.selectPaddingBottomLG;
        paddingLeft = Theme.selectPaddingLeftLG;
        paddingRight = Theme.selectPaddingRightLG;
        height = Theme.selectHeightLG;
        iconSize = Theme.selectIconSizeLG;
        break;
      case 'sm':
        borderRadius = Theme.selectBorderRadiusSM;
        fontSize = Theme.selectFontSizeSM;
        paddingTop = Theme.selectPaddingTopSM;
        paddingBottom = Theme.selectPaddingBottomSM;
        paddingLeft = Theme.selectPaddingLeftSM;
        paddingRight = Theme.selectPaddingRightSM;
        height = Theme.selectHeightSM;
        iconSize = Theme.selectIconSizeSM;
        break;
      default:
        borderRadius = Theme.selectBorderRadiusMD;
        fontSize = Theme.selectFontSizeMD;
        paddingTop = Theme.selectPaddingTopMD;
        paddingBottom = Theme.selectPaddingBottomMD;
        paddingLeft = Theme.selectPaddingLeftMD;
        paddingRight = Theme.selectPaddingRightMD;
        height = Theme.selectHeightMD;
        iconSize = Theme.selectIconSizeMD;
    }
    style = [{
      backgroundColor: Theme.selectColor,
      borderColor: Theme.selectBorderColor,
      borderWidth: Theme.selectBorderWidth,
      borderRadius: borderRadius,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      height: height,
    }].concat(style).concat({flexDirection: 'row', alignItems: 'center'});
    if (disabled) style = style.concat({opacity: Theme.btnDisabledOpacity});

    //value
    let valueElement;
    if (!placeholderTextColor) placeholderTextColor = Theme.selectPlaceholderTextColor;
    valueStyle = [{
      color: Theme.selectTextColor,
      fontSize: fontSize,
      flexGrow: 1,
      overflow: 'hidden',
    }].concat(valueStyle);
    if (value === null || value === undefined) {
      valueStyle = valueStyle.concat({color: placeholderTextColor});
      valueElement = <Text style={valueStyle} numberOfLines={1} allowFontScaling={false}>{placeholder}</Text>;
    } else {
      valueElement = <Text style={valueStyle} numberOfLines={1} allowFontScaling={false}>{this.valueText}</Text>;
    }

    //iconTintColor
    if (!iconTintColor) iconTintColor = Theme.selectIconTintColor;
    this.props = {style, size, value, valueStyle, valueElement, disabled, iconTintColor, iconSize, placeholder, placeholderTextColor, ...others};
  }

  showPullPicker() {
    let {pickerTitle, items, getItemText, onSelected} = this.props;
    PullPicker.show(
      pickerTitle,
      items,
      this.selectedIndex,
      onSelected,
      {getItemText}
    );
  }

  showPopoverPicker() {
    this.measureInWindow((x, y, width, height) => {
      let {items, getItemText, onSelected} = this.props;
      PopoverPicker.show(
        {x, y, width, height},
        items,
        this.selectedIndex,
        onSelected,
        {getItemText, align: 'end'}
      );
    });
  }

  showPicker() {
    switch (this.props.pickerType) {
      case 'pull':
        this.showPullPicker();
        break;
      case 'popover':
        this.showPopoverPicker();
        break;
      default:
        Theme.isPad ? this.showPopoverPicker() : this.showPullPicker();
        break;
    }
  }

  render() {
    this.buildProps();

    let {style, disabled, iconTintColor, editable, iconSize, valueElement, children, onPress, onLayout, ...others} = this.props;
    let ViewClass = disabled ? View : TouchableOpacity;
    return (
      <ViewClass
        style={style}
        disabled={disabled || !editable}
        onPress={e => onPress ? onPress(e) : this.showPicker()}
        onLayout={e => {
          this.measureInWindow((x, y, width, height) => {
            this.popoverView && this.popoverView.updateFromBounds({x, y, width, height});
          });
          onLayout && onLayout(e);
        }}
        {...others}
        ref='selectView'
      >
        {valueElement}
        <View style={{position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center'}}>
          <Image style={{width: iconSize, height: iconSize, tintColor: iconTintColor}} source={require('../icons/select.png')} />
        </View>
      </ViewClass>
    );
  }
}
