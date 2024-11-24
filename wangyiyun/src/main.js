import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

//全局filter
Vue.filter("time2mmss", function (value) {
  if (!value) return "";

  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String((value % 60).toFixed(0)).padStart(2, "0")}`;
});

Vue.filter('formatPlayCount', function (value) {
  if (!value) return '0';
  const count = Number(value);
  if (count >= 100000000) {
      return (count / 100000000).toFixed(1) + '亿';
  } else if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
  } else {
      return count.toString();
  }
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
