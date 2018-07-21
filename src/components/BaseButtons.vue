<template>
  <div class="buttons">
    <button class="button"
      :disabled="submitting"
      @click="$emit('cancel-action')"
      :data-qa="`cancel-${element}`">
      {{ $t('cancel') | capitalize }}
    </button>
    <button class="button"
      :class="{ 'is-loading': submitting,
        'is-success': !dangerousAction,
        'is-danger': dangerousAction }"
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
      default: false,
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
    dangerousAction: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    capitalizedElement() {
      return capitalize(this.element);
    },
  },
};
</script>
