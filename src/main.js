import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";
Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(VueResource);
Vue.http.options.root = "https://jsonplaceholder.typicode.com";
Vue.http.headers.common["Authorization"] = "Basic YXBpOnBhc3N3b3Jk";
Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (request.after) {
      request.after.call(this, response);
    }
  });
});
new Vue({
  el: "#app",
  render: h => h(App)
});
