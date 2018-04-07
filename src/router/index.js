import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/home/home-page';
import SearchPage from '@/components/search/search-page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchPage,
    },
  ],
});
