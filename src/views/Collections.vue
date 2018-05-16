<template>
  <section class="collections section">
    <aside
      id="collections-menu"
      class="menu">
      <p class="menu-label no-select">
        {{ $t('collections') | capitalize }}
      </p>
      <ul class="menu-list">
        <li v-if="collectionSet.length === 0" class="no-select">
          {{ $t('noCollections') | capitalize }}
        </li>
        <li v-else
          v-for="collection in collectionSet"
          :key="collection.id"
          @click="selectCollection(collection.id)">
          <router-link to="/templates" class="no-select"
            :class="{ 'is-active' : (collection.id === selectedCollectionId) }">
            {{ collection.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </router-link>
        </li>
      </ul>
    </aside>
    <router-view id="collections-settings" :collection="collection"/>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Collections',
  props: ['collection'],
  computed: {
    ...mapGetters([
      'collectionSet',
      'selectedCollectionId',
    ]),
  },
  methods: {
    ...mapActions([
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

    .menu-list li a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .icon {
      visibility: hidden;
    }
    .is-active:hover .icon,
    a:hover .icon {
      visibility: visible;
    }
  }
</style>

