<template>
  <div class="element-action-buttons" data-qa="element-action-buttons">
    <div class="field has-addons">
      <p class="control">
        <router-link :to="{ name: 'ElementsEdit', params:
            { elementId: element.id, element }}"
            class="button" data-qa="edit-element">
            <span class="icon is-small">
            <i class="fas fa-cog"></i>
          </span>
        </router-link>
        <!--<a class="button"
          @click="updateElement"
          data-qa="edit-element">
          <span class="icon is-small">
            <i class="fas fa-cog"></i>
          </span>
        </a>-->
      </p>
      <p class="control">
        <a class="button"
          data-qa="remove-element">
          <span class="icon is-small">
            <i class="fas fa-times-circle"></i>
          </span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex';
// import { isEmpty } from 'lodash';

export default {
  name: 'ElementActionButtons',
  props: {
    element: {
      type: Object,
    },
  },
  /* computed: {
    ...mapGetters([
      'selectedElement',
    ]),
  },
  methods: {
    ...mapMutations([
      'setSelectedElement',
    ]),
    updateElement() {
      if (!isEmpty(this.selectedElement)) {
        try {
          this.selectedElement.resync();
        } catch (error) {
          console.log(error);
        }
      }
      this.setSelectedElement(this.element);
    },
    removeElement() {
      /* if (!isEmpty(this.selectedElement)) {
        try {
          this.selectedElement.resync();
        } catch (error) {
          console.log(error);
        }
      }
      this.setSelectedElement(this.element);
      this.toggleRemoveElement(true);
      console.log('Removing element');
      console.log(this.element);
    },
  }, */
};
</script>
