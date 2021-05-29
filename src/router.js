import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/index.vue';
import WeekForecast from './pages/weekForecast.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/week-forecast',
      name: 'weekForecast',
      component: WeekForecast
    }
  ]
});
