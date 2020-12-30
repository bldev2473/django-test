import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.component('global-component', {
  render: h => h('div', 'Global Component')
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
