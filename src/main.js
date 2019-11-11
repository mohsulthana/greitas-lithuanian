import Vue from 'vue';
import Buefy from 'buefy';
import vueScrollTo from 'vue-scrollto';
import router from './router';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.use(vueScrollTo);

Vue.config.productionTip = false;
require('./assets/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
