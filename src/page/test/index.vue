<template>
  <div class="a">
    <div v-for="d in ddd"
         :key="d.ch">
      <quna :txt="d" />
    </div>
  </div>
</template>

<script>
import quna from './quna.vue'
let ddd = [
  {
    ch: '首尔购物',
    en: 'shopping in seoul',
    author: 'yangjaie',
    time: '20180810'
  }
  // {
  //   ch: "舌尖上的韩国",
  //   en: "taste of korea",
  //   author: "hancong",
  //   time: "20180810"
  // },
  // {
  //   ch: "幸福民宿",
  //   en: "western taiwan",
  //   author: "han",
  //   time: "20180810"
  // }
]
export default {
  data: function() {
    return {
      ddd
    }
  },
  components: {
    quna
  }
}
</script>

<style>
</style>
