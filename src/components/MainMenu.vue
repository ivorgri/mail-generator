<template>
  <nav id="main-menu" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
            <router-link :to="{ name: 'createcollection' }"
              class="navbar-item">
              {{ $t('addCollection') | capitalize }}
            </router-link>
            <router-link v-if="selectedCollection" :to="{ name: 'editcollection', params:
              { collection: this.selectedCollection }}"
              class="navbar-item">
              {{ $t('editCollection') | capitalize }}
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
            <router-link :to="{ name: 'createuser' }"
              class="navbar-item">
              {{ $t('createUser') | capitalize }}
            </router-link>
            <router-link v-if="selectedUser" :to="{ name: 'edituser', params:
              { user: this.selectedUser}}"
              class="navbar-item">
              {{ $t('editUser') | capitalize }}
            </router-link>
            <router-link v-if="usersExist" :to="{ name: 'selectuser'}"
              class="navbar-item">
              {{ $t('selectUser') | capitalize }}
            </router-link>
            <hr v-if="selectedUser" class="navbar-divider">
            <a v-if="selectedUser" class="navbar-item"
              @click="clearSelectedUser">
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
      openBurger: false,
      userDropdown: false,
      collectionDropdown: false,
      templateDropdown: false,
      elementDropdown: false,
      user: {
        name: 'test',
        locale: 'nl',
      },
    };
  },
  computed: {
    ...mapGetters([
      'selectedUser',
      'users',
      'selectedCollection',
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
      'showUserModal',
      'clearSelectedUser',
    ]),
    switchToLanguage(locale) {
      this.$i18n.locale = locale;
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
      /* switch (target) {
        case 'user':
          this.userDropdown = !this.userDropdown;
          this.collectionDropdown = false;
          this.templateDropdown = false;
          this.elementDropdown = false;
          break;
        case 'collection':
          this.userDropdown = false;
          this.collectionDropdown = !this.collectionDropdown;
          this.templateDropdown = false;
          this.elementDropdown = false;
          break;
        default:
          this.userDropdown = false;
          this.collectionDropdown = false;
          this.templateDropdown = false;
          this.elementDropdown = false;
          break;
      } */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/settings.scss';

#main-menu {
  grid-area: navbar;
  border-bottom: $border-color $border-size $border-style;
}
</style>
