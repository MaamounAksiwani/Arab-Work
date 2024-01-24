
import Vue from 'vue'
import App from './App'
import * as VueGoogleMaps from 'vue2-google-maps'

import router from './router'
/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    /// you can add your key here to show the map
    key: 'ADD_YOUR_KEY_HERE'
  }
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
