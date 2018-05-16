<template>
  <section class="templates section">
    <aside
      id="templates-menu"
      class="menu">
      <p class="menu-label">
        {{ $t('collections') | capitalize }}
      </p>
      <ul v-if="selectedCollection" class="menu-list selected-collection-menu"
        :style="{ minHeight: menuHeight + 'px' }">
        <li id="selected-collection" ref="selectedCollection">
          <router-link to="/collections"
            class="is-active">
            <span id="back-icon"
              class="icon is-small">
              <i class="fas fa-angle-left" aria-hidden="true"></i>
            </span>
            {{ selectedCollection.name }}
          </router-link>
        </li>
      </ul>
      <p class="menu-label no-select">
        {{ $t('templates') | capitalize }}
      </p>
      <ul class="menu-list">
        <li v-if="templateSet.length === 0" class="no-select">
          {{ $t('noTemplates') | capitalize }}
        </li>
        <li v-else
          v-for="template in templateSet"
          :key="template.id"
          @click="selectTemplate(template.id)">
          <a class="no-select" :class="{ 'is-active' : (template.id === selectedTemplateId) }">
            {{ template.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        </li>
      </ul>
    </aside>
    <router-view id="template-settings" :template="template"/>
  </section>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Templates',
  props: ['template'],
  computed: {
    ...mapGetters([
      'selectedCollection',
      'templateSet',
      'selectedTemplateId',
    ]),
  },
  data() {
    return {
      menuHeight: 0,
    };
  },
  watch: {
    selectedCollection(newVal) {
      if (newVal !== false) {
        Vue.nextTick(() => {
          this.menuHeight = this.$refs.selectedCollection.clientHeight;
        });
      }
    },
  },
  methods: {
    ...mapActions([
      'selectTemplate',
    ]),
  },
};
</script>

<style lang="scss">
  @import './../styles/settings.scss';

  .templates {
    padding: 0em;
    display: grid;
    grid-template-columns: 200px auto;
  }

  #templates-menu {
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

    .filled-menu-list {
      overflow-y: auto;
      overflow-x: hidden;
    }

    #selected-collection a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    #selected-collection #back-icon {
      visibility: hidden;
    }

    #selected-collection:hover #back-icon {
      visibility: visible;
    }
  }
</style>

