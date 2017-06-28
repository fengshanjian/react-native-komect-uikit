# `<Popover />` 气泡

Popover 组件定义一个气泡, 是一个可在边框任意位置显示一个三角形箭头的圆角矩形容器, 常用于聊天信息显示或弹出提示等。

之前的popover是一个View组件，不是很符合具体的需求，根据OverlayPopview改进了一个Popover





## Static Methods

```js

  /**
   *
   * @param  {[type]} view       view的ref
   * @param  {[type]} black      背景色
   * @param  {[type]} direction  方向 可选值(down, right, left, up)
   * @param  {[type]} align      对齐 可选值(center, start, end)
   * @param  {[type]} customView popview内部显示的view
   * @return {[type]}            无返回
   */
  static showPopover(view, black, direction, align, customView)
  
  /**
   * 主动隐藏气泡
   * @return
   */
  static hide()

```

## Example
简单用法

```
  
const customView = (
  <View>
    <Text>
      哈哈哈
    </Text>
    <TouchableOpacity 
       ref="button"
       onPress={()=>{
        Popover.showPopover(this.refs.button,false,'down','center',customView)
    }}>
      <Text>
        heihei
      </Text>
    </TouchableOpacity>
    <Text>
      哦哦哦
    </Text>
  </View>);  
  
  
  
```


## Screenshots
![](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/example/popover.png?raw=true)
