// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuefire from 'vuefire'
import firebase from './service/firebase'
import dogs from './service/firebase'
import VueResource from 'vue-resource'

Vue.use(Vuefire)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    dogs: dogs
  },
  router,
  template: '<App/>',
  components: { App }
})
