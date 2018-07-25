<template>
  <div v-if="templateList">
   <p class="menu-label">
      {{ $t('projects') | capitalize }}
    </p>
    <ul v-if="selectedProjectExists" class="menu-list selected-project-menu"
      :style="{ minHeight: menuHeight + 'px' }" data-qa="selected-project-menu-item">
      <li id="selected-project">
        <router-link to="/projects"
          class="is-active">
          <span id="back-icon"
            class="icon is-small">
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          </span>
          {{ selectedProject.name }}
        </router-link>
      </li>
    </ul>
    <p class="menu-label no-select">
      {{ $t('templates') | capitalize }}
    </p>
    <ul v-if="templateList.length === 0" class="menu-list">
      <li class="no-select">
        {{ $t('noTemplates') | capitalize }}
      </li>
    </ul>
    <ul v-else class="menu-list">
      <li
        v-for="template in templateList"
        :key="template.id"
        @click="selectTemplate(template)"
        data-qa="template-items">
        <a class="no-select"
          :class="{ 'is-active' : (template.id === selectedProject.selectedTemplateId) }">
          {{ template.name }}
          <span class="icon is-small">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TemplateMenu',
  data() {
    return {
      menuHeight: 0,
    };
  },
  computed: {
    ...mapGetters([
      'templates',
      'selectedProject',
      'selectedTemplate',
    ]),
    templateList() {
      if (this.templates) {
        return this.templates.filter(template => !template.archived &&
          template.projectId === this.selectedProject.id);
      }
      return [];
    },
    selectedProjectExists() {
      return !this.$lodash.isEmpty(this.selectedProject);
    },
  },
  methods: {
    ...mapActions([
      'selectTemplate',
    ]),
  },
  watch: {
    selectedProject(newValue) {
      if (newValue !== false) {
        Vue.nextTick(() => {
          this.menuHeight = this.$refs.selectedProject.clientHeight;
        });
      }
    },
  },
};
</script>
