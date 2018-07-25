<template>
  <nav id="main-menu" class="navbar" role="navigation" aria-label="main navigation">
    <!-- Hamburger menu -->
    <div class="navbar-brand is-hidden-desktop">
      <a class="navbar-item" href="#">
        Menu
      </a>
      <a role="button"
        class="navbar-burger burger "
        :class="{ 'is-active': openDropdown.burger }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleDropdown('burger')">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Navigation menu -->
    <div class="navbar-menu"
      :class="{ 'is-active': openDropdown.burger }">
      <div class="navbar-start">
        <!-- Projects -->
        <div class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.project }"
          @click="toggleDropdown('project')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span data-qa="projects-menu">{{ $t('projects') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link to="/projects"
              class="navbar-item"
              data-qa="open-projects">
              {{ $t('openProjects') | capitalize }}
            </router-link>
            <hr class="navbar-divider">
            <router-link :to="{ name: 'ProjectCreate' }"
              class="navbar-item"
              data-qa="create-project">
              {{ $t('addProject') | capitalize }}
            </router-link>
            <router-link v-if="projectIsSelected" :to="{ name: 'ProjectEdit', params:
              { project: this.selectedProject }}"
              class="navbar-item" data-qa="update-project">
              {{ $t('editProject') | capitalize }}
            </router-link>
            <router-link v-if="projectIsSelected" :to="{ name: 'ProjectArchive', params:
              { project: this.selectedProject }}"
              class="navbar-item" data-qa="archive-project">
              {{ $t('archiveProject') | capitalize }}
            </router-link>
          </div>
        </div>
        <!-- Templates -->
        <div v-if="projectIsSelected" class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.template }"
          @click="toggleDropdown('template')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span data-qa="templates-menu">{{ $t('templates') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link to="/templates"
              class="navbar-item"
              data-qa="open-templates">
              {{ $t('openTemplates') | capitalize }}
            </router-link>
            <hr class="navbar-divider">
            <router-link :to="{ name: 'TemplateCreate' }"
              class="navbar-item" data-qa="create-template">
              {{ $t('addTemplate') | capitalize }}
            </router-link>
            <router-link v-if="templateIsSelected" :to="{ name: 'TemplateEdit', params:
              { template: this.selectedTemplate }}"
              class="navbar-item" data-qa="update-template">
              {{ $t('editTemplate') | capitalize }}
            </router-link>
            <router-link v-if="templateIsSelected" :to="{ name: 'TemplateArchive', params:
              { template: this.selectedTemplate }}"
              class="navbar-item" data-qa="archive-template">
              {{ $t('archiveTemplate') | capitalize }}
            </router-link>
            <hr v-if="elementsExist"
              class="navbar-divider">
            <router-link v-if="elementsExist" :to="{ name: 'TemplateDownload', params:
              { template: this.selectedTemplate }}"
              class="navbar-item" data-qa="download-template">
              {{ $t('downloadTemplate') | capitalize }}
            </router-link>
          </div>
        </div>
        <!-- Elements -->
        <div v-if="templateIsSelected" class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.element }"
          @click="toggleDropdown('element')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span data-qa="elements-menu">{{ $t('elements') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link :to="{ name: 'ElementsAdd' }"
              class="navbar-item"
              data-qa="add-elements">
              {{ $t('addElements') | capitalize }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <!-- User -->
        <!--<div class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.user }"
          @click="toggleDropdown('user')">
          <a v-if="!selectedUser" class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            <span>{{ $t('anonymous') | capitalize }}</span>
          </a>
          <a v-if="selectedUser" class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            <span>{{ selectedUser.name }}</span>
          </a>
          <div class="navbar-dropdown is-right">
            <router-link :to="{ name: 'createUser' }"
              class="navbar-item">
              {{ $t('createUser') | capitalize }}
            </router-link>
            <router-link v-if="selectedUser" :to="{ name: 'editUser', params:
              { user: this.selectedUser}}"
              class="navbar-item">
              {{ $t('editUser') | capitalize }}
            </router-link>
            <router-link v-if="usersExist" :to="{ name: 'selectUser'}"
              class="navbar-item">
              {{ $t('selectUser') | capitalize }}
            </router-link>
            <hr v-if="selectedUser" class="navbar-divider">
            <a v-if="selectedUser" class="navbar-item"
              @click="logout">
              {{ $t('logout') | capitalize }}
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainMenu',
  data() {
    return {
      openDropdown: {
        user: false,
        project: false,
        template: false,
        element: false,
        burger: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'selectedUser',
      'users',
      'selectedProject',
      'selectedTemplate',
      'elementsExist',
    ]),
    usersExist() {
      return !this.$lodash.isEmpty(this.users);
    },
    projectIsSelected() {
      return !this.$lodash.isEmpty(this.selectedProject);
    },
    templateIsSelected() {
      return !this.$lodash.isEmpty(this.selectedTemplate);
    },
  },
  watch: {
    selectedUser(newValue) {
      if (newValue !== undefined) {
        this.switchToLanguage(newValue.locale);
      }
    },
    $route() {
      this.toggleDropdown('none');
    },
  },
  methods: {
    ...mapMutations([
      'clearSelectedUser',
    ]),
    switchToLanguage(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      this.clearSelectedUser();
      this.$router.push({ name: 'projects' });
    },
    toggleDropdown(target) {
      const keys = Object.keys(this.openDropdown);
      const toggleDropdown = {};
      keys.forEach((key) => {
        if (target === key) {
          toggleDropdown[key] = !this.openDropdown[key];
        } else {
          toggleDropdown[key] = false;
        }
      });
      this.openDropdown = toggleDropdown;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/settings.scss';

#main-menu {
  grid-area: mainmenu;
  border-bottom: $border-color $border-size $border-style;
}
</style>
