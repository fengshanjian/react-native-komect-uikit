/**
 * @Author: will
 * @Date:   2017-07-24T19:34:02+08:00
 * @Filename: Switch1.js
 * @Last modified by:   will
 * @Last modified time: 2017-08-15T15:55:36+08:00
 */



import React, { Component } from 'react'
import {Switch} from 'react-native-komect-uikit'
import {
  AppRegistry,
  StyleSheet,
  PanResponder,
  Text,
  View
} from 'react-native'

export default class Example extends Component {
  state={
    value: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch   inactiveText="关"
          activeText="开"/>
        <Switch defaultValue={true} style={{marginTop: 20}} />
        <Switch
          width={60}
          height={30}
          style={{marginTop: 20}}
          value={this.state.value}

          // onAsyncPress={(callback) => {
          //   setTimeout(() => callback(true), 300)
          // }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example)
