/**
 * @Author: will
 * @Date:   2017-08-09T23:33:32+08:00
 * @Filename: PopoverPickerItem.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-12T17:10:35+08:00
 */



// PopoverPickerItem.js

'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Theme from '../themes/Theme';

export default class PopoverPickerItem extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    selected: PropTypes.bool,
  };

  buildProps() {
    let {style, title, selected, ...others} = this.props;

    style = [{
      backgroundColor: Theme.poppItemColor,
      paddingLeft: Theme.poppItemPaddingLeft,
      paddingRight: Theme.poppItemPaddingRight,
      paddingTop: Theme.poppItemPaddingTop,
      paddingBottom: Theme.poppItemPaddingBottom,
      borderColor: Theme.poppItemSeparatorColor,
      borderBottomWidth: Theme.poppItemSeparatorWidth,
      flexDirection: 'row',
      alignItems: 'center',
    }].concat(style);
    let imageStyle = {
      width: Theme.poppAccessoryWidth,
      height: Theme.poppAccessoryHeight,
      tintColor: Theme.poppAccessoryCheckColor,
    };
    let accessory = (
      <View style={{paddingLeft: Theme.poppAccessoryPaddingLeft}}>
        <Image style={imageStyle} source={selected ? require('../icons/check.png') : null} />
      </View>
    );
    if (typeof title === 'string' || typeof title === 'number') {
      let titleStyle = {
        color: Theme.poppItemTitleColor,
        fontSize: Theme.poppItemFontSize,
        overflow: 'hidden',
        flexGrow: 1,
        flexShrink: 1,
      };
      title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>
    }

    this.props = {style, title, accessory, selected, ...others};
  }

  render() {
    this.buildProps();

    let {title, accessory, ...others} = this.props;
    return (
      <TouchableOpacity {...others}>
        {title}
        {accessory}
      </TouchableOpacity>
    );
  }
}
