<template>
  <div class="element-action-buttons">
    <div class="field has-addons">
      <p class="control">
        <a class="button"
          @click="updateElement">
          <span class="icon is-small">
            <i class="fas fa-cog"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <a class="button"
          @click="removeElement">
          <span class="icon is-small">
            <i class="fas fa-times-circle"></i>
          </span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { isEmpty } from 'lodash';

export default {
  name: 'ElementActionButtons',
  props: ['element'],
  computed: {
    ...mapGetters([
      'selectedElement',
    ]),
  },
  methods: {
    ...mapMutations([
      'toggleEditElement',
      'toggleRemoveElement',
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
      this.toggleEditElement(true);
    },
    removeElement() {
      if (!isEmpty(this.selectedElement)) {
        try {
          this.selectedElement.resync();
        } catch (error) {
          console.log(error);
        }
      }
      this.setSelectedElement(this.element);
      this.toggleRemoveElement(true);
    },
  },
};
</script>
