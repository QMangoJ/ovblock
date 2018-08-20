<template>
  <div class="container">
    <div :class="style.parent"
         ref="parent">

      <div :class='style.child1'>
        <slot :name="style.isFront?'img':'text'" />
      </div>

      <div :class='style.child2'>
        <slot :name="!style.isFront?'img':'text'" />
      </div>

    </div>
  </div>
</template>

<script>
/**
 * 概览块视图组件，具体参考{@tutorial ovblock}
 * @vue-prop {iOvblock#interaction} interaction - 定义交互的方式函数{@link iOvblock#interaction}
 * @vue-prop {Array<String>} [event=[]] - 定义交互触发的事件
 * @vue-data {module:ovblock#style} style - 定义该视图组件的布局和响应相关格式 {@link module:ovblock#style}
 */
export default {
  props: {
    interaction: {
      type: Function
    },
    event: {
      type: Array
    }
  },
  data: function() {
    return {
      /**
       * 定义该视图组件的布局和响应相关格式
       * @typedef {Object} module:ovblock#style
       * @property {Array} parent - 父组件的样式列表.
       * @property {Array} child1 - 子组件1的样式列表.
       * @property {Array} child2 - 子组件2的样式列表.
       * @property {boolean} isFront - 定义两个子组件是否调换位置.
       * @property {Array} event - 定义组件交互所监听的事件，可以是 点击、悬浮 等.
       */
      style: {
        parent: ['row', 'justify-content-center'],
        child1: ['col-4'],
        child2: ['col-4'],
        isFront: true,
        event
      }
    }
  },
  mounted: function() {
    if (!this.interaction) return
    this.interaction(this.style, this.$refs.parent)
  }
}
</script>

<style>
</style>
