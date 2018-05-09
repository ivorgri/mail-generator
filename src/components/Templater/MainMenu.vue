<template>
  <nav id="main-menu" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <a class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{ $t('anonymous') }}
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item"
            @click="showUserModal()">
            {{ $t('login') }}
          </a>
          <a class="navbar-item"
            @click="changeNameUser()">
            {{ $t('changeName') }}
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item"
            @click="logoutUser()">
            {{ $t('logout') }}
          </a>
        </div>
      </a>
      <a class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{ $t('language') }}
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
      </a>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MainMenu',
  methods: {
    ...mapMutations([
      'showUserModal',
    ]),
    switchToLanguage(locale) {
      this.$i18n.locale = locale;
    },
    changeNameUser() {
      console.log('2DO: Change name!');
    },
    logoutUser() {
      console.log('2DO: Logout!');
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
