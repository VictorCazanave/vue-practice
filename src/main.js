// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './app';
import router from './router';

// Need to register global filters before the app starts: https://forum.vuejs.org/t/how-to-format-date-for-display/3586/14
import './filters/formatDate';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>',
});
