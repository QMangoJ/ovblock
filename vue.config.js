// vue.config.js
/* eslint-disable */
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios"
    }
  }
};
