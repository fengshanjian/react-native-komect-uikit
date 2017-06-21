/**
 * @Author: will
 * @Date:   2017-06-19T17:49:44+08:00
 * @Filename: Projector.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T15:01:05+08:00
 */



// Projector.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';

import Theme from '../themes/Theme';

export default class Projector extends Component {

  static propTypes = {
    ...View.propTypes,
    index: PropTypes.number,
    slideStyle: View.propTypes.style,
  };

  static defaultProps = {
    ...View.defaultProps,
    index: 0,
  };

  constructor(props) {
    super(props);
    this.slideShowns = this.initSlideShowns(props.children);
  }

  componentWillReceiveProps(nextProps) {
    let nextSlideShowns = this.initSlideShowns(nextProps.children);
    if (nextSlideShowns.length != this.slideShowns.length) {
      this.slideShowns = nextSlideShowns;
    }
  }

  initSlideShowns(children) {
    if (children instanceof Array) return children.map(item => false);
    else if (children) return [false];
    return [];
  }

  render() {
    let {index, slideStyle, children, ...others} = this.props;
    if (!(children instanceof Array)) {
      if (children) children = [children];
      else children = [];
    }
    return (
      <View {...others}>
        {children.map((item, i) => {
          let active = (i == index);
          if (active) this.slideShowns[i] = true;
          let renderSlideStyle = [slideStyle, styles.slide, {opacity: active ? 1 : 0}];
          return (
            <View key={i} style={renderSlideStyle} pointerEvents={active ? 'auto' : 'none'}>
              {this.slideShowns[i] ? item : null}
            </View>
          );
        })}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slide: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
