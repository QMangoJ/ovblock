## OvBLock 接口描述文档

OvBlock，又称为概览块组件。用来构建概览块的统一形式。

### 组件结构

- 基础视图组件：ovblock.vue 为视图层的基础组件
- 插件：继承 iOvBlock.js，实现了几个相关的插件
  - mask.js 主要实现蒙版的功能
  - vertical.js 主要实现垂直布局功能
  - XXX.js 你需要自己实现，并进行扩展的插件
- 抽象实现：利用“基础视图组件”和选定的“插件”，构建一个具体模块的实现，具体示例参考：[抽象实现示例](#抽象实现示例)
- 数据挂载与应用：

### 使用示例

#### 抽象实现示例

首先引入基础视图组件，同时选择相关的插件

```js
// user.vue <script>
import ovblock from 'path/to/ovblock.vue' // 1.导入基础视图组件,你可以将ovblock改成你喜欢的任意名称
import plug from 'path/to/plug.js' // 2.导入实现插件，利用组合关系构成最终的功能，plug具体为mask/vertical等。
export default {
  components: {
    ovblock, // 3.定义为本地组件
    ...
  },
  methods: {
    plug //4.由于插件实现的是interaction接口，因此应该将其放在method中
  }
```

```html
<!-- user.vue <template>-->
<ovblock :interaction="vertical"> // 1.引入ovblock标签
  <div slot="img"></div> // 2.插入两个插槽
  <div slot="text"></div>
</ovblock>
```
