<template>
  <div id="init-database" data-qa="init-database">
    <div id="init-database-message">
      <h5 class="title is-5">Initializing databases</h5>
      <span class="icon fa-3x">
        <i class="fas fa-cog fa-spin" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingDatabase',
};
</script>

<style lang="scss">
  #init-database {
    height: 100%;
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
    ". . ."
    ". message ."
    ". . .";

    #init-database-message {
      grid-area: message;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
