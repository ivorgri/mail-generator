<template>
  <div class="buttons">
    <button class="button"
      :disabled="submitting"
      @click="$emit('cancel-action')"
      :data-qa="`cancel-${interfaceElement}`">
      {{ $t('cancel') | capitalize }}
    </button>
    <button class="button is-success"
      :class="{ 'is-loading': submitting }"
      :disabled="disabled || cancelling"
      @click="$emit('perform-action')"
      :data-qa="`${interfaceAction}-${interfaceElement}-button`">
        {{ $t(`${interfaceAction}${capElement}`) | capitalize }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { capitalize } from 'lodash';

export default {
  name: 'BaseLayout',
  props: {
    disabled: {
      type: Boolean,
      required: true,
    },
    cancelling: {
      type: Boolean,
      default: false,
    },
    submitting: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'interfaceAction',
      'interfaceElement',
    ]),
    capElement() {
      return capitalize(this.interfaceElement);
    },
  },
};
</script>
