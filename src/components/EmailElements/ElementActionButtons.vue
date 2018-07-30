<template>
  <div class="element-action-buttons" data-qa="element-action-buttons">
    <div class="field has-addons">
      <p v-if="!(element.order === undefined || element.order === 1)" class="control">
        <a class="button"
          @click="moveElementUp"
          data-qa="move-element-up">
          <span class="icon is-small">
            <i class="fa fa-angle-up"></i>
          </span>
        </a>
      </p>
      <p v-if="!(element.order === undefined || lastElement)" class="control">
        <a class="button"
          @click="moveElementDown"
          data-qa="move-element-down">
          <span class="icon is-small">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <router-link :to="{ name: 'ElementsEdit', params:
            { elementId: element.id, element }}"
            class="button" data-qa="edit-element">
          <span class="icon is-small">
            <i class="fas fa-cog"></i>
          </span>
        </router-link>
      </p>
      <p class="control">
        <router-link :to="{ name: 'ElementsArchive', params:
            { elementId: element.id, element }}"
            class="button" data-qa="archive-element">
          <span class="icon is-small">
            <i class="fas fa-times-circle"></i>
          </span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import errorHandling from '@/mixins/errorHandling';

export default {
  name: 'ElementActionButtons',
  props: {
    element: {
      type: Object,
    },
  },
  mixins: [errorHandling],
  computed: {
    ...mapGetters([
      'db',
      'elementList',
    ]),
    lastElement() {
      return this.element.order === this.elementList.length;
    },
  },
  methods: {
    async moveElementUp() {
      const movedElement = this.element;
      const needToMoveElement = this.elementList[movedElement.order - 2];
      movedElement.order -= 1;
      needToMoveElement.order += 1;
      try {
        await movedElement.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      try {
        await needToMoveElement.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
    },
    async moveElementDown() {
      const movedElement = this.element;
      const needToMoveElement = this.elementList[movedElement.order];
      movedElement.order += 1;
      needToMoveElement.order -= 1;
      try {
        await movedElement.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      try {
        await needToMoveElement.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
    },
  },
};
</script>
