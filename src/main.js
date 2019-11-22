import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

import Header from './components/Header.vue'

Vue.config.productionTip = false

Vue.component('app-server-status', Home);
Vue.component('header', Header);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
