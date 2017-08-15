# Switch

A universal switch for android and iOS, it could be the best switch for react-native on Github.

## Preview
<img src="http://ww4.sinaimg.cn/large/005zU9b3jw1faioulkg79j30kq10wq3c.jpg" width="340" height="600"/>
&nbsp;&nbsp;&nbsp;
<img src="http://ww2.sinaimg.cn/large/005zU9b3jw1faioygbedfg30a90iejrd.gif" width="340" height="600"/>

## Feature
* Almost perfect switch on react-native
* Have a good peformance on both iOS and Android  
* Add gesture with `PanResponder`  
* More animations to follow iOS native performance
* Support async and sync event
* Support bidirectional data binding
* Clear code style



## Usage
* Sync  
  
```JavaScript
import Switch from 'react-native-switch-pro'
...
  render() {
    return (
      <View style={styles.container}>
        <Switch onSyncPress={value => {...}}/>
      </View>
    )
  }
...
```

* Async  
 
```JavaScript
...
  render() {
    return (
      <View style={styles.container}>
        <Switch onAsyncPress={(callback) => {
          You can call your async module and just invoke callback(true) when succeed,  
          callback(false) when fail.
        }}/>
      </View>
    )
  }
...
```

## Props
 Name | Description | Default | Type
------|-------------|----------|-----------
width | width of switch | 40 | number
height | height of switch | 21 | number
value | state of switch which can be used to bidirectional binding | undefined | bool
defaultValue | default state of switch | false | bool
disabled | whether switch is clickable | false | bool
circleColorActive | color for circle handler of switch when it is on | white | string
circleColorInactive | color for circle handler of switch when it is off | white | string
backgroundActive | color of switch when it is on | green | string
backgroundInactive | color of switch when it is off | '#ddd' | string
onSyncPress | callback when switch is clicked | () => null | func
onAsyncPress | has a callback with result of async | (value, callback) => {callback(true)} | func
activeText | active text | null | string
inactiveText | inactive text | null | string
activeTextStyle | active text的样式，修改前查看源码中的样式设定，再进行修改 | null | style
inactiveTextStyle | inactive text的样式，修改前查看源码中的样式设定，再进行修改  | null | style

## Notice
* You'd better not use `onSyncPress` and `onAsyncPress` together or else, only `onSyncPress` will be invoked.
* `value` is used with bidirectional binding which could be redux、state and so on.  
In `onAsyncPress`, you should write like following (with state):  

	```javascript
	<Switch
	  value={this.state.value}
	  onAsyncPress={(callback) => {
	    callback(false or true, value => this.setState({value}))
     }}
	/>
	```
	`value => this.setState({value})` will only be invoked when result is true.


