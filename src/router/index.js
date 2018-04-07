import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/home/home-page';
import SearchPage from '@/components/search/search-page';
import GamePage from '@/components/game/game-page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GamePage,
    },
  ],
});
