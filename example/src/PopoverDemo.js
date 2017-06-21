/**
 * @Author: will
 * @Date:   2017-06-20T16:06:01+08:00
 * @Filename: Popover.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T16:14:13+08:00
 */




import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ListRow, Popover, Label} from 'react-native-komect-uikit';

export default class Popover1 extends PureComponent {
  static propTypes = {
    navigation: React.PropTypes.any,
  }
  render() {
    let img = require('./images/faircup.jpg');
    return (
      <ScrollView style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={{height: 20}} />

        <View style={{padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, paddingRight: 8, alignItems: 'flex-end'}}>
            <Popover style={styles.popoverStyle} arrow='bottomRight'>
              <Label style={{color: '#000'}} text='bottomRight' />
            </Popover>
          </View>
          <View>
            <Popover style={styles.popoverStyle} arrow='bottom'>
              <Label style={{color: '#000'}} text='bottom' />
            </Popover>
          </View>
          <View style={{flex: 1, paddingLeft: 8, alignItems: 'flex-start'}}>
            <Popover style={styles.popoverStyle} arrow='bottomLeft'>
              <Label style={{color: '#000'}} text='bottomLeft' />
            </Popover>
          </View>
        </View>

        <View style={{padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, paddingRight: 40, alignItems: 'flex-end'}}>
            <Popover style={styles.popoverStyle} arrow='rightBottom'>
              <Label style={{color: '#000'}} text='rightBottom' />
            </Popover>
          </View>
          <View style={{height: 32, width: 32}} />
          <View style={{flex: 1, paddingLeft: 40, alignItems: 'flex-start'}}>
            <Popover style={styles.popoverStyle} arrow='leftBottom'>
              <Label style={{color: '#000'}} text='leftBottom' />
            </Popover>
          </View>
        </View>

        <View style={{padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, paddingRight: 40, alignItems: 'flex-end'}}>
            <Popover style={styles.popoverStyle} arrow='right'>
              <Label style={{color: '#000'}} text='right' />
            </Popover>
          </View>
          <Image style={{height: 32, width: 32, borderRadius: 16, tintColor: '#337ab7'}} source={require('../react-native-komect-uikit/src/teaset/icons/smile.png')}/>
          <View style={{flex: 1, paddingLeft: 40, alignItems: 'flex-start'}}>
            <Popover style={styles.popoverStyle} arrow='left'>
              <Label style={{color: '#000'}} text='left' />
            </Popover>
          </View>
        </View>

        <View style={{padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, paddingRight: 40, alignItems: 'flex-end'}}>
            <Popover style={styles.popoverStyle} arrow='rightTop'>
              <Label style={{color: '#000'}} text='rightTop' />
            </Popover>
          </View>
          <View style={{height: 32, width: 32}} />
          <View style={{flex: 1, paddingLeft: 40, alignItems: 'flex-start'}}>
            <Popover style={styles.popoverStyle} arrow='leftTop'>
              <Label style={{color: '#000'}} text='leftTop' />
            </Popover>
          </View>
        </View>

        <View style={{padding: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{flex: 1, paddingRight: 8, alignItems: 'flex-end'}}>
            <Popover style={styles.popoverStyle} arrow='topRight'>
              <Label style={{color: '#000'}} text='topRight' />
            </Popover>
          </View>
          <View>
            <Popover style={styles.popoverStyle} arrow='top'>
              <Label style={{color: '#000'}} text='top' />
            </Popover>
          </View>
          <View style={{flex: 1, paddingLeft: 8, alignItems: 'flex-start'}}>
            <Popover style={styles.popoverStyle} arrow='topLeft'>
              <Label style={{color: '#000'}} text='topLeft' />
            </Popover>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  popoverStyle: {
  backgroundColor: '#fff',
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12,
  alignItems: 'center',
  justifyContent: 'center',
},
shadowStyle: {
  shadowColor: '#777',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.5,
  shadowRadius: 2,
},
});
