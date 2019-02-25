<template>
  <div class="pageloader is-active">
    <span class="title">
      {{ $t('initializingDatabase') | capitalize }}
    </span>
  </div>
  <!-- <div id="init-database" data-qa="init-database">
    <div id="init-database-message">
      <h5 class="title is-5">{{ $t('initializingDatabase') | capitalize }}</h5>
      <ul>
        <li class="loading-item">
          <span>{{ $t('loadingProjects') | capitalize }}</span>
          <span v-if="!loadingProjects" class="icon is-small has-text-success">
            <i class="fas fa-check"></i>
          </span>
        </li>
        <li class="loading-item">
          <span>{{ $t('loadingTemplates') | capitalize }}</span>
          <span v-if="!loadingTemplates" class="icon is-small has-text-success">
            <i class="fas fa-check"></i>
          </span>
        </li>
        <li class="loading-item">
          <span>{{ $t('loadingElements') | capitalize }}</span>
          <span v-if="!loadingElements" class="icon is-small has-text-success">
            <i class="fas fa-check"></i>
          </span>
        </li>
        <li class="loading-item">
          <span>{{ $t('loadingState') | capitalize }}</span>
          <span v-if="!loadingState" class="icon is-small has-text-success">
            <i class="fas fa-check"></i>
          </span>
        </li>
      </ul>
      <span id="loading-cog" class="icon fa-3x">
        <i class="fas fa-cog fa-spin" aria-hidden="true"></i>
      </span>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'LoadingDatabase',
  /* props: {
    loadingProjects: {
      type: Boolean,
      default: true,
    },
    loadingTemplates: {
      type: Boolean,
      default: true,
    },
    loadingElements: {
      type: Boolean,
      default: true,
    },
    loadingState: {
      type: Boolean,
      default: true,
    },
  },*/
};
</script>

<style lang="scss">
  @import '~bulma-pageloader';
  /* #init-database {
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

    #loading-cog {
      margin-top: 10px;
      height: 50px;
      width: 50px;
    }

    .loading-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .icon {
        margin-left: 10px;
      }
    }
  } */
</style>