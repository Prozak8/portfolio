import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faVuejs,
  faReact
} from '@fortawesome/free-brands-svg-icons';

Vue.config.productionTip = false;

library.add(faGithubSquare, faLinkedin, faVuejs, faReact);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
