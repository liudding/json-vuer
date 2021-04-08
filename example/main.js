import Vue from 'vue'
import App from './App.vue'

import JsonVuer from "../src";

Vue.use(JsonVuer);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
