import Vue from 'vue'
import '../vue.prototype'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
