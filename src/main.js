import Vue from "vue";
import App from "./App.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppServers from "./AppServers.vue";

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);
Vue.component('app-servers', AppServers);

new Vue({
  el: "#app",
  render: h => h(App),
});
