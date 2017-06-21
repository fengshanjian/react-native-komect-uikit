/**
 * @Author: will
 * @Date:   2017-06-20T15:54:49+08:00
 * @Filename: LableExample.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T16:04:17+08:00
 */




import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {PureComponent, PropTypes} from 'react';

import {ListRow, Label} from 'react-native-komect-uikit';

export default class LableExample extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={{height: 20}} />
        <ListRow title='Type default' detail={<Label text='Label' />} topSeparator='full' />
        <ListRow title='Type title' detail={<Label text='Label' type='title' />} />
        <ListRow title='Type detail' detail={<Label text='Label' type='detail' />} />
        <ListRow title='Type danger' detail={<Label text='Label' type='danger' />} bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Size xs' detail={<Label text='Label' size='xs'/>} topSeparator='full' />
        <ListRow title='Size sm' detail={<Label text='Label' size='sm'/>} />
        <ListRow title='Size md' detail={<Label text='Label' size='md'/>} />
        <ListRow title='Size lg' detail={<Label text='Label' size='lg'/>} />
        <ListRow title='Size xl' detail={<Label text='Label' size='xl'/>} bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Custom' detail={<Label style={{color: '#8a6d3b', fontSize: 16}} text='Custom' />} topSeparator='full' bottomSeparator='full' />
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
