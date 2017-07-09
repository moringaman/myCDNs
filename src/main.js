import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import App from './App.vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

new Vue({
  el: '#app',
  render: h => h(App)
})
