/**
 * @Author: will
 * @Date:   2017-06-20T16:31:42+08:00
 * @Filename: CarouselDemo.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T16:35:28+08:00
 */




import React, {PureComponent, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions} from 'react-native';

import { ListRow, Carousel, PullPicker} from 'react-native-komect-uikit';

export default class CarouselDemo extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  constructor(props) {
  super(props);
  this.items = ['none', 'default', 'custom'];
  // Object.assign(this.state, {
  //   width: Dimensions.get('window').width,
  //   control: 'none',
  // });
  this.state = {
    width: Dimensions.get('window').width,
       control: 'none',
  }
}

selectControl() {
  PullPicker.show(
    'Control',
    this.items,
    this.items.indexOf(this.state.control),
    (item, index) => this.setState({control: item})
  );
}

renderControl() {
  let {control} = this.state;
  if (control === 'default') {
    return <Carousel.Control />;
  } else if (control === 'custom') {
    return (
      <Carousel.Control
        style={{alignItems: 'flex-end'}}
        dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>□</Text>}
        activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>■</Text>}
        />
    );
  }
}

render() {
  let {width} = this.state;
  return (
    <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
      <Carousel
        style={{height: 238}}
        control={this.renderControl()}
        onLayout={e => this.setState({width: e.nativeEvent.layout.width})}
      >
        <Image style={{width, height: 238}} resizeMode='cover' source={require('./images/teaset1.jpg')} />
        <Image style={{width, height: 238}} resizeMode='cover' source={require('./images/teaset2.jpg')} />
        <Image style={{width, height: 238}} resizeMode='cover' source={require('./images/teaset3.jpg')} />
      </Carousel>
      <View style={{height: 20}} />
      <ListRow title='Control' detail={this.state.control} onPress={() => this.selectControl()} topSeparator='full' bottomSeparator='full' />
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
