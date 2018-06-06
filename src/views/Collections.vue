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
          <router-link to="/elements" class="no-select"
            :class="{ 'is-active' : (collection.id === selectedCollectionId) }"
            data-qa="collection-list-item">
            {{ collection.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </router-link>
        </li>
      </ul>
    </aside>
    <router-view id="collections-settings" class="settings" :collection="collection"/>
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
