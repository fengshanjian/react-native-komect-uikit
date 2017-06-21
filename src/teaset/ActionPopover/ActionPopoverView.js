/**
 * @Author: will
 * @Date:   2017-06-19T17:49:44+08:00
 * @Filename: ActionPopoverView.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T15:06:44+08:00
 */



// ActionPopoverView.js

'use strict';

import React, {Component, PropTypes} from "react";
import {View, ScrollView} from 'react-native';

import Theme from '../themes/Theme';
import Overlay from '../Overlay/Overlay';
import ActionPopoverItem from './ActionPopoverItem';

export default class ActionPopoverView extends Overlay.PopoverView {

  static propTypes = {
    ...Overlay.PopoverView.propTypes,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      onPress: PropTypes.func,
    })).isRequired,
  };

  static defaultProps = {
    ...Overlay.PopoverView.defaultProps,
    direction: 'up',
    align: 'center',
    showArrow: true,
  };

  static Item = ActionPopoverItem;

  onItemPress(item) {
    this.close(false);
    item.onPress && item.onPress();
  }

  buildProps() {
    let {popoverStyle, directionInsets, items, children, ...others} = this.props;

    popoverStyle = [{
      backgroundColor: Theme.apColor,
      paddingVertical: Theme.apPaddingVertical,
      paddingHorizontal: Theme.apPaddingHorizontal,
      borderRadius: Theme.apBorderRadius,
      flexDirection: 'row',
    }].concat(popoverStyle);

    if (!directionInsets && directionInsets !== 0) {
      directionInsets = Theme.apDirectionInsets;
    }

    children = [];
    for (let i = 0; items && i < items.length; ++i) {
      let item = items[i];
      children.push(
        <this.constructor.Item
          key={'item' + i}
          title={item.title}
          leftSeparator={i !== 0}
          onPress={() => this.onItemPress(item)}
          />
      );
    }

    this.props = {popoverStyle, directionInsets, items, children, ...others} ;

    super.buildProps();
  }
}
