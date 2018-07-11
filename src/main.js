import Vue from 'vue';
import lodash from 'lodash';

import App from './App.vue';
import store from './store';
import i18n from './i18n';
import router from './router';
import './filters';

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
