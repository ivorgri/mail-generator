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
        <router-link to="/" class="navbar-item">{{ $t('collections') | capitalize }}</router-link>
        <router-link to="/user" class="navbar-item">{{ $t('anonymous') | capitalize }}</router-link>
        <!-- <a class="navbar-item has-dropdown is-hoverable">
          <a v-if="!selectedUser" class="navbar-link">
            {{ $t('anonymous') | capitalize }}
          </a>
          <a v-else class="navbar-link">
            {{ selectedUser.name }}
          </a>
          <div class="navbar-dropdown">
            <a v-if="!selectedUser" class="navbar-item"
              @click="showUserModal('add')">
              {{ $t('createUser') | capitalize }}
            </a>
            <a class="navbar-item"
              @click="showUserModal('edit')">
              {{ $t('editUser') | capitalize }}
            </a>
            <a v-if="selectedUser" class="navbar-item"
              @click="showUserModal('select')">
              {{ $t('selectUser') | capitalize }}
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item"
              @click="clearSelectedUser">
              {{ $t('logout') | capitalize }}
            </a>
          </div>
        </a>
        <a class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            {{ $t('language') | capitalize }}
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item"
              @click="switchToLanguage('nl')">
              Nederlands
            </a>
            <a class="navbar-item"
              @click="switchToLanguage('en')">
              English
            </a>
          </div>
        </a>-->
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
      openBurger: false,
    };
  },
  computed: {
    ...mapGetters([
      'selectedUser',
    ]),
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
#main-menu {
  grid-area: mainmenu;
}
</style>
