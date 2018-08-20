<template>
  <ovblock :interaction="vertical">
    <!-- 详细定义 概览块-图 的样式和内容 -->
    <img slot="img"
         class="mysize"
         :src="imgrr"
         alt="xxx">

    <!-- 详细定义 概览块-文 的样式和内容 -->
    <div slot='text'
         class="content">
      <div class="name-zh">{{txt.ch}}</div>
      <div class="name-en">{{txt.en}}</div>
      <div class="bar"></div>
      <div class="info"
           id="hc">作者：{{txt.author}} <br> {{txt.time}}</div>
      <a href="#"
         class="btn">下载</a>
    </div>

  </ovblock>
</template>

<script>
import ovblock from '../../components/OvBlock/ovblock.vue'
import mask from '../../components/OvBlock/mask'
import vertical from '../../components/OvBlock/vertical'
export default {
  data: function() {
    return {
      imgrr: '@/assets/img/01.jpg'
    }
  },
  components: {
    ovblock
  },
  props: ['txt'],
  methods: {
    mask,
    vertical
  }
}
</script>

<style lang="scss" scoped>
.mysize {
  width: 240px;
  height: 339px;
}
.content {
  margin: 52px 0 0 20px;
  color: green;
  .name-zh {
    font-size: 26px;
  }
  .name-en {
    font-size: 20px;
    line-height: 30px;
    padding: 1px 0 10px 0;
  }
  .bar {
    width: 40px;
    height: 0px;
    border-bottom: white 2px solid;
  }
  .info {
    margin: 26px 0 26px 0;
  }
  .btn {
    border: 1px white solid;
    border-radius: 0px;
  }
}
</style>
