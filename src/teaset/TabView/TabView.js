/**
 * @Author: will
 * @Date:   2017-09-07T20:49:16+08:00
 * @Filename: TabView.js
 * @Last modified by:   will
 * @Last modified time: 2017-09-11T16:37:36+08:00
 */



// TabView.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import Theme from '../themes/Theme';
import TabSheet from './TabSheet';
import TabButton from './TabButton';
import Projector from '../Projector/Projector';
import Carousel from '../Carousel/Carousel';

export default class TabView extends Component {

  static propTypes = {
    ...View.propTypes,
    type: PropTypes.oneOf(['projector', 'carousel']),
    barStyle: View.propTypes.style,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func, //(index)
  };

  static defaultProps = {
    ...View.defaultProps,
    type: 'projector',
  };

  static Sheet = TabSheet;
  static Button = TabButton;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.activeIndex ? this.props.activeIndex : 0,
    };
  }

  get activeIndex() {
    let activeIndex = this.props.activeIndex;
    if (activeIndex || activeIndex === 0) return activeIndex;
    else return this.state.activeIndex;
  }

  buildProps() {
    let {style, barStyle, children, ...others} = this.props;

    style = [{
      flexDirection: 'column',
      alignItems: 'stretch',
    }].concat(style);
    barStyle = [{
      backgroundColor: Theme.tvBarColor,
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      height: Theme.tvBarHeight,
      paddingTop: Theme.tvBarPaddingTop,
      paddingBottom: Theme.tvBarPaddingBottom,
      borderTopWidth: Theme.tvBarSeparatorWidth,
      borderColor: Theme.tvBarSeparatorColor,
    }].concat(barStyle);
    barStyle = StyleSheet.flatten(barStyle);
    let {height, paddingTop, paddingBottom} = barStyle;
    let buttonContainerStyle = {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      paddingTop,
      paddingBottom,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
    };
    let buttonStyle = {
      minHeight: height - paddingTop - paddingBottom,
    };

    if (!(children instanceof Array)) {
      if (children) children = [children];
      else children = [];
    }
    children = children.filter(item => item); //remove empty item

    this.props = {style, barStyle, buttonContainerStyle, buttonStyle, children, ...others};
  }

  renderBar() {
    //Overflow is not supported on Android, then use a higher container view to support "big icon button"
    let {barStyle, buttonContainerStyle, buttonStyle, onChange, children} = this.props;
    let sheetCount = 0;
    return (
      <View pointerEvents='box-none'>
        <View style={barStyle} />
        <View style={buttonContainerStyle} pointerEvents='box-none'>
          {children.map((item, index) => {
            let {type, title, icon, activeIcon, iconContainerStyle, badge, onPress} = item.props;
            let sheetIndex = sheetCount;
            if (type === 'sheet') sheetCount += 1;
            return (
              <this.constructor.Button
                key={index}
                style={buttonStyle}
                title={title}
                icon={icon}
                activeIcon={activeIcon}
                active={type === 'sheet' ? sheetIndex === this.activeIndex : false}
                iconContainerStyle={iconContainerStyle}
                badge={badge}
                onPress={e => {
                  if (type === 'sheet') {
                    this.setState({activeIndex: sheetIndex}, () => {
                      this.refs.carousel && this.refs.carousel.scrollToPage(sheetIndex);
                      onChange && onChange(sheetIndex);
                    });
                  }
                  onPress && onPress(e);
                }}
                />
            );
          })}
        </View>
      </View>
    );
  }

  renderProjector() {
    return (
      <Projector style={{flex: 1}} index={this.activeIndex}>
        {this.props.children.filter(item => item && item.props.type === 'sheet')}
      </Projector>
    );
  }

  renderCarousel() {
    let {children, onChange} = this.props;
    return (
      <Carousel
        style={{flex: 1}}
        carousel={false}
        startIndex={this.activeIndex}
        cycle={false}
        ref='carousel'
        onChange={index => {
          if (typeof index !== 'number') return;
          this.setState({activeIndex: index}, () => onChange && onChange(index));
        }}
      >
        {children.filter(item => item && item.props.type === 'sheet')}
      </Carousel>
    );
  }

  render() {
    this.buildProps();

    let {barStyle, type, children, ...others} = this.props;
    return (
      <View {...others}>
        {type === 'carousel' ? this.renderCarousel() : this.renderProjector()}
        <View style={{height: barStyle.height, width: 1}} />
        {this.renderBar()}
      </View>
    );
  }

}
