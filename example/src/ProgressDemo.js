/**
 * @Author: will
 * @Date:   2017-06-20T16:53:25+08:00
 * @Filename: ProgressDemo.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-20T16:56:54+08:00
 */




import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Progress} from 'react-native-komect-uikit'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});

export default class ProgressDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <View style={styles.circles}>
          <Progress.Circle
            style={styles.progress}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
          <Progress.Pie
            style={styles.progress}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
          <Progress.Circle
            style={styles.progress}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            direction="counter-clockwise"
          />
        </View>
        <View style={styles.circles}>
          <Progress.CircleSnail
            style={styles.progress}
          />
          <Progress.CircleSnail
            style={styles.progress}
            color={[
              '#F44336',
              '#2196F3',
              '#009688',
            ]}
          />
        </View>
      </View>
    );
  }
}
