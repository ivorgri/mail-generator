<template>
  <div id="error-messages-area">
    <div id="error-messages">
      <div v-for="(error, index) in errors" :key=index class="notification"
        :class="error.class">
        <button @click="deleteError(index)" class="delete"></button>
        <div class="error-message">{{ error.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ErrorMessages',
  computed: {
    ...mapGetters([
      'errors',
    ]),
  },
  methods: {
    ...mapMutations([
      'removeError',
    ]),
    deleteError(errorIndex) {
      this.removeError(errorIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#error-messages-area {
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: auto 40%;
  grid-template-areas: '. errormessages';
  z-index: 100;
  pointer-events: none;
}

#error-messages {
  grid-area: errormessages;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
  padding-right: 5px;
  pointer-events: none;
}

.notification {
  pointer-events: auto;
  height: 125px;
  overflow: auto;
}

.error-message {
  height: 100%;
  overflow: auto;
}
</style>
