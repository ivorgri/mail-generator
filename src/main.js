import Vue from 'vue';
// import VueFormGenerator from 'vue-form-generator';
// import 'vue-form-generator/dist/vfg.css';

import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './filters';

// Vue.use(VueFormGenerator);

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
