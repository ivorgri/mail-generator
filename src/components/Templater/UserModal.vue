<template>
  <div v-if="showUserModal" id="user-modal" class="modal"
  :class="{ 'is-active': showUserModal }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      Test
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainMenu',
  computed: {
    ...mapState([
      'showUserModal',
    ]),
  },
  watch: {
    showUserModal(val) {
      console.log(val);
    },
  },
  methods: {
    switchToLanguage(locale) {
      this.$i18n.locale = locale;
    },
    loginUser() {
      console.log('2DO: Login!');
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
</style>
