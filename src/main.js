// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuefire from 'vuefire'
import firebase from './service/firebase'

Vue.use(Vuefire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    pups: firebase.database.ref('pup').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
