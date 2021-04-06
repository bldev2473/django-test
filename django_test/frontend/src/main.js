import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// Vue Default Global Component
Vue.component('global-component', {
  render: h => h('div', 'Global Component')
});

// Event Bus Instance
export const eventBus = new Vue();

// Vuetify
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
