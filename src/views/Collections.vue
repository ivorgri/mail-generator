<template>
  <base-layout>
    <template slot="aside">
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
    </template>
    <collection
      v-if="interfaceAction !== ''"
      :collection="collection"/>
  </base-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const Collection = () => import(/* webpackChunkName: "collection" */ '@/views/Collection.vue');

export default {
  name: 'Collections',
  props: {
    collection: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    Collection,
  },
  data() {
    return {
      action: '',
      element: '',
    };
  },
  computed: {
    ...mapGetters([
      'collectionSet',
      'selectedCollectionId',
      'interfaceAction',
    ]),
  },
  methods: {
    ...mapActions([
      'selectCollection',
    ]),
  },
};
</script>
