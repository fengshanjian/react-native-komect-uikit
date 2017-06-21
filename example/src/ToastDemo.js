/**
 * @Author: will
 * @Date:   2017-06-20T16:14:50+08:00
 * @Filename: ToastDemo.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T16:17:54+08:00
 */




import React, { PureComponent } from 'react';
import {
  View,
  Text,ScrollView, ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { ListRow, Toast, Theme} from 'react-native-komect-uikit';

export default class ToastDemo extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }


  static customKey = null;

showCustom() {
  if (ToastExample.customKey) return;
  ToastExample.customKey = Toast.show({
    text: 'Toast custom',
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'top',
    duration: 1000000,
  });
}

hideCustom() {
  if (!ToastExample.customKey) return;
  Toast.hide(ToastExample.customKey);
  ToastExample.customKey = null;
}

render() {
  let img = require('./images/faircup.jpg');
  return (
    <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
      <View style={{height: 20}} />
      <ListRow title='Message' onPress={() => Toast.message('Toast message')} topSeparator='full' />
      <ListRow title='Success' onPress={() => Toast.success('Toast success')} />
      <ListRow title='Fail' onPress={() => Toast.fail('Toast fail')} />
      <ListRow title='Smile' onPress={() => Toast.smile('Toast smile')} />
      <ListRow title='Sad' onPress={() => Toast.sad('Toast sad')} />
      <ListRow title='Info' onPress={() => Toast.info('Toast info')} />
      <ListRow title='Stop' onPress={() => Toast.stop('Toast stop')} bottomSeparator='full' />
      <View style={{height: 20}} />
      <ListRow title='Show custom' onPress={() => this.showCustom()} topSeparator='full' />
      <ListRow title='Hide custom' onPress={() => this.hideCustom()} bottomSeparator='full' />
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
