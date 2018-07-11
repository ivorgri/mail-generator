/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  projects: {},
  selectedProject: {},
};

const getters = {
  projects: state => state.projects,
  projectSet: (state) => {
    if (isEmpty(state.projects)) {
      return [];
    }
    const projectIds = Object.keys(state.projects);
    const projectSet = [];
    projectIds.forEach((projectId) => {
      // if (state.projects[projectId].authorId === getters.selectedUserId) {
        projectSet.push(state.projects[projectId]);
      // }
    });
    return projectSet;
  },
  selectedProject: state => state.selectedProject,
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
  async updateProjects({ commit }, projectDocs) {
    const projects = {};
    projectDocs.forEach((doc) => {
      projects[doc.id] = doc;
    });
    commit('setProjects', projects);
  },
  async selectProject({ getters, commit, dispatch }, selectedProject) {
    commit('selectProject', selectedProject);
    try {
      dispatch('selectTemplate', getters.selectedProject.selectedTemplateId);
    } catch (error) {
      console.log(error);
    }

    /* if (getters.selectedUser !== false) {
      getters.selectedUser.selectedProjectId = selectedProjectId;
      try {
        await getters.selectedUser.save();
      } catch (error) {
        console.log(error);
      }
    } */
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
