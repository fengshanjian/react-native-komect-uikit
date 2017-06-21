/**
 * @Author: will
 * @Date:   2017-06-19T17:49:44+08:00
 * @Filename: ActionPopoverItem.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T15:06:38+08:00
 */



// ActionPopoverItem.js

'use strict';

import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Theme from '../themes/Theme';

export default class ActionPopoverItem extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    leftSeparator: PropTypes.bool,
    rightSeparator: PropTypes.bool,
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
  };

  buildProps() {
    let {style, title, leftSeparator, rightSeparator, ...others} = this.props;

    style = [{
      paddingVertical: Theme.apItemPaddingVertical,
      paddingHorizontal: Theme.apItemPaddingHorizontal,
      borderColor: Theme.apSeparatorColor,
      borderLeftWidth: leftSeparator ? Theme.apSeparatorWidth : 0,
      borderRightWidth: rightSeparator ? Theme.apSeparatorWidth : 0,
    }].concat(style);

    if ((title || title === 0) && !React.isValidElement(title)) {
      let textStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: Theme.apItemTitleColor,
        fontSize: Theme.apItemFontSize,
      };
      title = <Text style={textStyle} numberOfLines={1}>{title}</Text>;
    }

    this.props = {style, title, leftSeparator, rightSeparator, ...others};
  }

  render() {
    this.buildProps();

    let {title, ...others} = this.props;
    return (
      <TouchableOpacity {...others}>
        {title}
      </TouchableOpacity>
    );
  }

}
