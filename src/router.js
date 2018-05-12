import Vue from 'vue';
import Router from 'vue-router';
import Collections from '@/views/Collections.vue';
import User from '@/views/User.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'collections',
      component: Collections,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
  ],
});
