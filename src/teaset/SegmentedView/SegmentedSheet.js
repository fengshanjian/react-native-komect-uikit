/**
 * @Author: will
 * @Date:   2017-08-09T23:33:32+08:00
 * @Filename: SegmentedSheet.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-12T14:16:57+08:00
 */



// SegmentedSheet.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import Theme from '../themes/Theme';

export default class SegmentedSheet extends Component {

  static propTypes = {
    ...View.propTypes,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
    titleStyle: Text.propTypes.style,
    activeTitleStyle: Text.propTypes.style,
    badge: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
  };

  render() {
    let {style, title, titleStyle, activeTitleStyle, badge, ...others} = this.props;
    style = [{flexGrow: 1}].concat(style);
    return <View style={style} {...others} />;
  }
}
