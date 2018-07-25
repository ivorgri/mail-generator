/* eslint-disable no-param-reassign, no-shadow */

const state = {
  projects: [],
  selectedProject: {},
};

const getters = {
  projects: state => state.projects,
  /* projectSet: (state) => {
    if (isEmpty(state.projects)) {
      return [];
    }
    const projectIds = Object.keys(state.projects);
    const projectSet = [];
    projectIds.forEach((projectId) => {
      if (!state.projects[projectId].archived) {
        projectSet.push(state.projects[projectId]);
      }
    });
    return projectSet;
  }, */
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
  /* async updateProjects({ commit }, projectDocs) {
    const projects = {};
    projectDocs.forEach((doc) => {
      projects[doc.id] = doc;
    });
    commit('setProjects', projects);
  }, */
  async selectProject({ getters, commit, dispatch }, selectedProject) {
    commit('selectProject', selectedProject);
    const selectedTemplate = getters.templates.filter(template =>
      template.id === selectedProject.selectedTemplateId)[0];
    try {
      dispatch('selectTemplate', selectedTemplate);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
