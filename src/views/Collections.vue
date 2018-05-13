<template>
  <section class="collections section">
    <aside
      id="collections-menu"
      class="menu">
      <p class="menu-label">
        {{ $t('collections') | capitalize }}
      </p>
      <ul class="menu-list">
        <li v-if="collectionSet.length === 0">
          {{ $t('noCollections') | capitalize }}
        </li>
        <li v-else
          v-for="collection in collectionSet"
          :key="collection.id"
          @click="selectCollection(collection.id)">
          <a :class="{ 'is-active' : (collection.id === selectedCollectionId) }">
            {{ collection.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Collections',
  computed: {
    ...mapGetters([
      'collectionSet',
      'selectedCollectionId',
    ]),
  },
  methods: {
    ...mapMutations([
      'selectCollection',
    ]),
  },
};
</script>

<style lang="scss">
  @import './../styles/settings.scss';

  .collections {
    padding: 0em;
    display: grid;
    grid-template-columns: 200px auto;
  }

  #collections-menu {
    height: 100%;
    padding: 1em 0.5em;
    border-right: $border-color $border-size $border-style;

    .icon {
      display: none;
    }
    .is-active:hover .icon,
    a:hover .icon {
      display: inline;
    }
  }
</style>

