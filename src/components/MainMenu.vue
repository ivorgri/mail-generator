<template>
  <nav id="main-menu" class="navbar" role="navigation" aria-label="main navigation">
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
    <div class="navbar-menu"
      :class="{ 'is-active': openDropdown.burger }">
      <div class="navbar-start">
        <!-- Collections -->
        <div class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.collection }"
          @click="toggleDropdown('collection')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span>{{ $t('collections') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link to="/collections"
              class="navbar-item">
              {{ $t('openCollections') | capitalize }}
            </router-link>
            <hr class="navbar-divider">
            <router-link :to="{ name: 'createCollection' }"
              class="navbar-item">
              {{ $t('addCollection') | capitalize }}
            </router-link>
            <router-link v-if="selectedCollection" :to="{ name: 'editCollection', params:
              { collection: this.selectedCollection }}"
              class="navbar-item">
              {{ $t('editCollection') | capitalize }}
            </router-link>
          </div>
        </div>
        <!-- Templates -->
        <div v-if="collectionSet.length > 0" class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.template }"
          @click="toggleDropdown('template')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span>{{ $t('templates') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <router-link to="/templates"
              class="navbar-item">
              {{ $t('openTemplates') | capitalize }}
            </router-link>
            <hr class="navbar-divider">
            <router-link :to="{ name: 'createTemplate' }"
              class="navbar-item">
              {{ $t('addTemplate') | capitalize }}
            </router-link>
            <router-link v-if="selectedTemplate" :to="{ name: 'editTemplate', params:
              { template: this.selectedTemplate }}"
              class="navbar-item">
              {{ $t('editTemplate') | capitalize }}
            </router-link>
          </div>
        </div>
        <!-- Elements -->
        <div v-if="selectedTemplate" class="navbar-item has-dropdown"
          :class="{ 'is-active': openDropdown.element }"
          @click="toggleDropdown('element')">
          <a class="navbar-link no-select">
            <span class="icon">
              <i class="fas fa-folder" aria-hidden="true"></i>
            </span>
            <span>{{ $t('elements') | capitalize }}</span>
          </a>
          <div class="navbar-dropdown">
            <!-- <router-link :to="{ name: 'elements' }"
              class="navbar-item">
              {{ $t('openElements') | capitalize }}
            </router-link>
            <hr class="navbar-divider"> -->
            <router-link :to="{ name: 'addElements' }"
              class="navbar-item">
              {{ $t('addElements') | capitalize }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <!-- User -->
        <div class="navbar-item has-dropdown"
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { isEmpty } from 'lodash';

export default {
  name: 'MainMenu',
  data() {
    return {
      openDropdown: {
        user: false,
        collection: false,
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
      'selectedCollection',
      'collectionSet',
      'selectedTemplate',
    ]),
    usersExist() {
      return !isEmpty(this.users);
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
      this.$router.push({ name: 'collections' });
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
  // grid-area: navbar;
  height: 50px;
  border-bottom: $border-color $border-size $border-style;
}
</style>
