import Vue from 'vue';
import Router from 'vue-router';
import Collections from '@/views/Collections.vue';
import Templates from '@/views/Templates.vue';
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
    meta: {
      test: 'test',
    },
    children: [{
      path: 'create',
      name: 'createCollection',
      component: Collections,
      meta: {
        action: 'create',
        element: 'collection',
      },
    }, {
      path: 'edit',
      name: 'editCollection',
      props: true,
      component: Collections,
      meta: {
        action: 'edit',
        element: 'collection',
      },
    }],
  }, {
    path: '/templates',
    name: 'templates',
    props: true,
    component: Templates,
    children: [{
      path: 'create',
      name: 'createTemplate',
      component: Templates,
      meta: {
        action: 'create',
        element: 'template',
      },
    }, {
      path: 'edit',
      name: 'editTemplate',
      props: true,
      component: Templates,
      meta: {
        action: 'edit',
        element: 'template',
      },
    }, {
      path: '/elements',
      name: 'elements',
      component: Templates,
      children: [{
        path: '/elements/add',
        name: 'addElements',
        component: Templates,
        meta: {
          action: 'add',
          element: 'elements',
        },
      }, {
        path: '/elements/edit',
        name: 'editElements',
        component: Templates,
        meta: {
          action: 'edit',
          element: 'element',
        },
      }],
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
