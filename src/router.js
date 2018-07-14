import Vue from 'vue';
import Router from 'vue-router';
import Projects from '@/views/Projects.vue';
import ProjectCreate from '@/views/ProjectCreate.vue';
import ProjectEdit from '@/views/ProjectEdit.vue';
import Templates from '@/views/Templates.vue';
import TemplateCreate from '@/views/TemplateCreate.vue';
import TemplateEdit from '@/views/TemplateEdit.vue';
import ElementsAdd from '@/views/ElementsAdd.vue';
import ElementsEdit from '@/views/ElementsEdit.vue';
// import User from '@/views/User.vue';
// import SelectUser from '@/views/SelectUser.vue';
// import EditUser from '@/views/EditUser.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/projects',
    name: 'projects',
    component: Projects,
  }, {
    path: '/project/create',
    name: 'ProjectCreate',
    component: ProjectCreate,
  }, {
    path: '/project/edit',
    name: 'ProjectEdit',
    props: true,
    component: ProjectEdit,
  }, {
    path: '/templates',
    name: 'templates',
    component: Templates,
  }, {
    path: '/template/create',
    name: 'TemplateCreate',
    component: TemplateCreate,
  }, {
    path: '/template/edit',
    name: 'TemplateEdit',
    props: true,
    component: TemplateEdit,
  }, {
    path: '/elements/add',
    name: 'ElementsAdd',
    component: ElementsAdd,
  }, {
    path: '/elements/edit/:elementId',
    name: 'ElementsEdit',
    props: true,
    component: ElementsEdit,
  }],
  /* children: [{
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
      path: 'download',
      name: 'downloadTemplate',
      props: true,
      component: Templates,
      meta: {
        action: 'download',
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
  }], */
});
