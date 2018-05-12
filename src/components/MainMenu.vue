<template>
  <nav id="main-menu" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-hidden-desktop">
      <a class="navbar-item" href="#">
        Menu
      </a>
      <a role="button"
        class="navbar-burger burger "
        :class="{ 'is-active': openBurger }"
        aria-label="menu"
        aria-expanded="false"
        @click="openBurger = !openBurger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu"
      :class="{ 'is-active': openBurger }">
      <div class="navbar-start">
        <!-- Collections -->
        <!-- <router-link to="/collections" class="navbar-item">
          {{ $t('collections') | capitalize }}
        </router-link> -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
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
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <!-- User -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a v-if="!selectedUser" class="navbar-link">
            <span class="icon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
            <span>{{ $t('anonymous') | capitalize }}</span>
          </a>
          <a v-if="selectedUser" class="navbar-link">
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
      openBurger: false,
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
  },
  methods: {
    ...mapMutations([
      'showUserModal',
      'clearSelectedUser',
    ]),
    switchToLanguage(locale) {
      this.$i18n.locale = locale;
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
