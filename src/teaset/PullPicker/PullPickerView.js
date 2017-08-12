/**
 * @Author: will
 * @Date:   2017-08-09T23:33:32+08:00
 * @Filename: PullPickerView.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-12T14:16:11+08:00
 */



// PullPickerView.js

'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';

import Theme from '../themes/Theme';
import Overlay from '../Overlay/Overlay';
import Label from '../Label/Label';
import PullPickerItem from './PullPickerItem';

export default class PullPickerView extends Overlay.PullView {

  static propTypes = {
    ...Overlay.PullView.propTypes,
    title: PropTypes.string,
    items: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number,
    getItemText: PropTypes.func, //(item, index) return display text of item, item=items[index], use item when it's null
    onSelected: PropTypes.func, //(item, index)
  };

  static Item = PullPickerItem;

  onItemPress(itemIndex) {
    let {items, onSelected} = this.props;
    this.close(false);
    onSelected && onSelected(items[itemIndex], itemIndex);
  }

  buildProps() {
    super.buildProps();

    let {title, items, selectedIndex, getItemText, children, ...others} = this.props;

    let headerRowStyle = {
      backgroundColor: Theme.pupHeaderColor,
      paddingLeft: Theme.pupHeaderPaddingLeft,
      paddingRight: Theme.pupHeaderPaddingRight,
      paddingTop: Theme.pupHeaderPaddingTop,
      paddingBottom: Theme.pupHeaderPaddingBottom
    };
    let headerTextStyle = {
      color: Theme.pupHeaderTitleColor,
      fontSize: Theme.pupHeaderFontSize,
      fontWeight: Theme.pupHeaderFontWeight,
    }
    let headerSeparatorStyle = {
      backgroundColor: Theme.pupHeaderSeparatorColor,
      height: Theme.pupHeaderSeparatorHeight,
    }
    children = (
      <View style={{backgroundColor: Theme.pupColor, maxHeight: Theme.pupMaxHeight}}>
        {!title ? null :
          <View style={headerRowStyle}>
            <Label style={headerTextStyle} text={title} />
          </View>
        }
        {!title ? null : <View style={headerSeparatorStyle} />}
        <ScrollView style={{backgroundColor: Theme.pupColor, flexGrow: 1}}>
          {items && items.map((item, index) => (
            <this.constructor.Item
              key={'item' + index}
              style={{backgroundColor: Theme.pupItemColor}}
              title={getItemText ? getItemText(item, index) : item}
              selected={index === selectedIndex}
              bottomSeparator={<View style={{backgroundColor: Theme.pupSeparatorColor, height: Theme.rowSeparatorLineWidth}} />}
              onPress={() => this.onItemPress(index)}
              />
          ))}
        </ScrollView>
      </View>
    );

    this.props = {title, items, selectedIndex, getItemText, children, ...others};
  }

}
