

<h1 align="center">
  React Native Komect UIKit
</h1>

<h4 align="center">
  跨平台 <a href="https://facebook.github.io/react-native/">React Native</a> UI Toolkit
</h4>


<br />


## 开始

### 安装


- [参考这里]


```js

npm i react-native-vector-icons --save && react-native link react-native-vector-icons
npm i react-native-komect-uikit --save

```

### 使用

Start using the components:

```js
import { Button } from 'react-native-komect-uikit';

<Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`}
/>
```

## Components 

-  [Buttons 按钮](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/buttons.md)
-  [Social Icons / Social Icon Buttons 社交图标](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/social_icons.md)
-  [Icons 图标](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/icons.md)
-  [Side Menu 侧滑菜单](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/side_menu.md)
-  [Form Elements 表单](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/forms.md)
-  [Search Bar 搜索栏](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/searchbar.md)
-  [ButtonGroup 按钮组合](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/button_group.md)
-  [Checkboxes 选择框](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/checkbox.md)
-  [List Element 列表以及列表item样式](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/lists.md)
-  [Badge 红点以及未读标志](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/badge.md)
-  [Tab Bar 底部Tab(不建议使用，建议使用react-naivigation）](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/tabbar.md)
-  [HTML style headings](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/HTML_style_headings.md)
-  [Card 卡片](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/card.md)
-  [Pricing 价格](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/pricing.md)
-  [Grid 视图分块](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/grid.md)
-  [Slider 滑块](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/slider.md)
-  [Tile](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/tile.md)
-  [Avatar 圆角图片](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/avatar.md)
-  [Rating 五星评价](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/rating.md)
-  [SwipeDeck 这个自己看](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/swipedeck.md)


以上组件fork自 <a href="https://github.com/react-native-training/react-native-elements/">react-native-elements</a> 如果文档不能帮助到你，可到原工程参考示例

## Teaset Component

-  [ActionPopover 操作气泡](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/ActionPopover.md)
-  [ActionSheet 操作选单](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/ActionSheet.md)
-  [BadgeTeaset 徽章](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Badge_teaset.md)
-  [Carousel 图片轮播](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Carousel.md)
-  [Label 文字](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Label.md)
-  [ListRow 列表item](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/ListRow.md)
-  [Menu 操作菜单](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Menu.md)
-  [ModalIndicator 模态指示器](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/ModalIndicator.md)
-  [Overlay 浮层](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Overlay.md)
-  [Popover 气泡](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Popover.md)
-  [PopoverPicker 气泡选择器](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/PopoverPicker.md)
-  [Projector 幻灯片](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Projector.md)
-  [PullPicker 上拉选择器](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/PullPicker.md)
-  [SegmentedBar 分段工具条](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/SegmentedBar.md)
-  [SegmentedView 分段器](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/SegmentedView.md)
-  [Select 选择框](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Select.md)
-  [Stepper 步进器](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Stepper.md)
-  [Toast 轻提示](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Toast.md)

以上组件fork自 <a href="https://github.com/rilyu/teaset">teaset</a> 如果文档不能帮助到你，可到原工程参考示例


## others Component
-  [ParallaxView 下拉放大](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/ParallaxView.md)    该组件fork自<a href="https://github.com/lelandrichardson/react-native-parallax-view">react-native-parallax-view</a>

-  [Loader 加载动画](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Loader.md)    该组件fork自<a href="https://github.com/mohebifar/react-native-loader">react-native-loader</a>
-  [Progress 进度条刷新按钮等](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Progress.md) 该组件fork自<a href="https://github.com/oblador/react-native-progress">react-native-progress </a>
-  [Swiper 轮播图](https://github.com/fengshanjian/react-native-komect-uikit/blob/master/docs/API/Swiper.md) 该组件fork自<a href="https://github.com/leecade/react-native-swiper">react-native-swiper </a>
