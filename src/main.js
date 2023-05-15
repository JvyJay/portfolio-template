import 'mdb-vue-ui-kit/css/mdb.min.css'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(AOS);
Vue.config.productionTip = false;

new Vue({
  router,

  mounted() {
    AOS.init()
  },

  store,
  render: (h) => h(App)
}).$mount("#app");

