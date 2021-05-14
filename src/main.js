import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import el from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(el);

Vue.config.productionTip = false;
// Vue.http.headers.common["Access-Control-Allow-Origin"] = true;
// Vue.http.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = false;
// axios.defaults.baseURL = 'https://runestone2021.herokuapp.com';

// axios.defaults.baseURL = 'https://runestone2021-server.herokuapp.com';
// axios.defaults.baseURL = "http://0eb09badb0e4.ngrok.io";
axios.defaults.baseURL = "http://137.116.132.172:8079/8079";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
