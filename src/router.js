import Vue from 'vue';
import Router from 'vue-router';
import Collections from '@/views/Collections.vue';
import Collection from '@/views/Collection.vue';
import Templates from '@/views/Templates.vue';
import Template from '@/views/Template.vue';
import Elements from '@/views/Elements.vue';
import addElements from '@/views/addElements.vue';
import User from '@/views/User.vue';
import SelectUser from '@/views/SelectUser.vue';
import EditUser from '@/views/EditUser.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/collections',
    name: 'collections',
    props: true,
    component: Collections,
    children: [{
      path: 'create',
      name: 'createCollection',
      component: Collection,
    }, {
      path: 'edit',
      name: 'editCollection',
      props: true,
      component: Collection,
    }],
  }, {
    path: '/templates',
    name: 'templates',
    props: true,
    component: Templates,
    children: [{
      path: 'create',
      name: 'createTemplate',
      component: Template,
    }, {
      path: 'edit',
      name: 'editTemplate',
      props: true,
      component: Template,
    }, {
      path: '/elements',
      name: 'elements',
      component: Elements,
    }, {
      path: '/elements/add',
      name: 'addElements',
      component: addElements,
    }],
  }, {
    path: '/user',
    name: 'user',
    props: true,
    component: User,
    children: [{
      path: 'create',
      name: 'createUser',
      component: EditUser,
    }, {
      path: 'edit',
      name: 'editUser',
      props: true,
      component: EditUser,
    }, {
      path: 'select',
      name: 'selectUser',
      props: true,
      component: SelectUser,
    }],
  }],
});
