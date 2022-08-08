import Vue from "vue";
import App from "./App.vue";
import "@/plugins/httpService";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowLeft,
  faSpinner,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

library.add(faArrowLeft, faSpinner, faAngleLeft, faAngleRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//we could define filters here, but we will end up having dirty vue instances.. better to use helper functions
// Vue.filter("capitalize", function (value) {
//   if (!value) return "";
//   value = value.toString();
//   return value.charAt(0).toUpperCase() + value.slice(1);
// });

Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
