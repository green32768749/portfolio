import Vue from 'vue';
import App from './App.vue';
import store from './store';

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueLoading, {
  color: '#f0897a',
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
