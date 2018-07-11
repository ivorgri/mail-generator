<template>
  <div>
    <p class="menu-label no-select">
      {{ $t('projects') | capitalize }}
    </p>
    <ul v-if="projectSet.length === 0" class="menu-list">
      <li class="no-select">
        {{ $t('noProjects') | capitalize }}
      </li>
    </ul>
    <ul v-else class="menu-list">
      <li
        v-for="project in projectSet"
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

export default {
  name: 'ProjectMenu',
  computed: {
    ...mapGetters([
      'projectSet',
      'selectedProject',
    ]),
  },
  methods: {
    ...mapActions([
      'selectProject',
    ]),
  },
};
</script>
