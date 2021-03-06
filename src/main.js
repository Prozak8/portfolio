import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Popover from 'vue-js-popover';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faVuejs,
  faReact,
  faHtml5,
  faSass,
  faJsSquare,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import {
  faMobileAlt,
  faBroadcastTower,
  faChevronRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

Vue.config.productionTip = false;

library.add(
  faGithubSquare,
  faLinkedin,
  faVuejs,
  faReact,
  faHtml5,
  faSass,
  faJsSquare,
  faBootstrap,
  faMobileAlt,
  faBroadcastTower,
  faChevronRight,
  faEnvelope
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Popover);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
