<template>
  <div v-if="projectList">
    <p class="menu-label no-select">
      {{ $t('projects') | capitalize }}
    </p>
    <ul v-if="projectList.length === 0" class="menu-list">
      <li class="no-select">
        {{ $t('noProjects') | capitalize }}
      </li>
    </ul>
    <ul v-else class="menu-list">
      <li
        v-for="project in projectList"
        :key="project.id"
        @click="selectProject(project)">
        <router-link to="/templates" class="no-select"
          :class="{ 'is-active' : (project.id === selectedProject.id) }"
          data-qa="project-list-item">
          {{ project.name }}
          <span class="icon is-small">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import baseDatabase from '@/mixins/baseDatabase';

export default {
  name: 'ProjectMenu',
  mixins: [baseDatabase],
  computed: {
    ...mapGetters([
      'selectedProject',
      'projects',
    ]),
    projectList() {
      if (this.projects) {
        return this.projects.filter(project => !project.archived);
      }
      return [];
    },
  },
  methods: {
    ...mapActions([
      'selectProject',
    ]),
  },
};
</script>
