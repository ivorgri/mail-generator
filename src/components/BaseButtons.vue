<template>
  <div class="buttons">
    <button class="button"
      :disabled="submitting"
      @click="$emit('cancel-action')"
      :data-qa="`cancel-${element}`">
      {{ $t('cancel') | capitalize }}
    </button>
    <button class="button is-success"
      :class="{ 'is-loading': submitting }"
      :disabled="disabled || cancelling"
      @click="$emit('perform-action')"
      :data-qa="`${action}-${element}-button`">
        {{ $t(`${action}${capitalizedElement}`) | capitalize }}
    </button>
  </div>
</template>

<script>
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
    action: {
      type: String,
    },
    element: {
      type: String,
    },
  },
  computed: {
    capitalizedElement() {
      return capitalize(this.element);
    },
  },
};
</script>
