/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  projects: [],
  selectedProject: {},
};

const getters = {
  projects: state => state.projects,
  selectedProject: state => state.selectedProject,
  projectById: state => (projectId) => {
    let project;
    if (state.projects.length > 0) {
      [project] = state.projects.filter(project => !project.archived &&
        project.id === projectId);
    }
    return project;
  },
};

const mutations = {
  setProjects(state, projects) {
    state.projects = projects;
  },
  selectProject(state, selectedProject) {
    state.selectedProject = selectedProject;
  },
  clearSelectedProject(state) {
    state.selectedProject = {};
  },
};

const actions = {
  async selectProject({ getters, commit, dispatch }, selectedProject) {
    if (!isEmpty(selectedProject)) {
      commit('selectProject', selectedProject);
      if (selectedProject.selectedTemplateId !== '') {
        const selectedTemplate = getters.templates.filter(template =>
          template.id === selectedProject.selectedTemplateId)[0];
        try {
          await dispatch('selectTemplate', selectedTemplate);
        } catch (error) {
          getters.addError({ message: error, class: 'is-danger' });
        }
      }

      getters.interfaceState.selectedProjectId = selectedProject.id;
      try {
        await dispatch('updateInterfaceState');
      } catch (error) {
        getters.addError({ message: error, class: 'is-danger' });
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
