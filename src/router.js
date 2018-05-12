import Vue from 'vue';
import Router from 'vue-router';
import Collections from '@/views/Collections.vue';
import Collection from '@/views/Collection.vue';
import User from '@/views/User.vue';
import SelectUser from '@/views/SelectUser.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/collections',
    name: 'collections',
    component: Collections,
  }, {
    path: '/createcollection',
    name: 'createcollection',
    props: true,
    component: Collection,
  }, {
    path: '/createuser',
    name: 'createuser',
    props: true,
    component: User,
  }, {
    path: '/edituser',
    name: 'edituser',
    props: true,
    component: User,
  }, {
    path: '/selectuser',
    name: 'selectuser',
    component: SelectUser,
  }],
});
