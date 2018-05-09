<template>
  <div v-if="showUserModal" id="user-modal" class="modal"
  :class="{ 'is-active': showUserModal }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title">{{ $t('userModalTitle') }}</h1>
        <form>
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
            :tag="tag">
          </vue-form-generator>
        </form>
        <button class="button"
          @click="hideUserModal">{{ $t('cancel') }}</button>
        <button class="button is-success"
          @click="hideUserModal">{{ $t('save') }}</button>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"
      @click="hideUserModal"></button>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'UserModal',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  data() {
    return {
      model: {
        name: '',
      },

      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          id: 'user_name',
          placeholder: 'Your name',
          min: 3,
          validator: VueFormGenerator.validator.string,
          required: true,
        }],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-',
      },

      tag: 'div',
    };
  },
  computed: {
    ...mapGetters([
      'showUserModal',
    ]),
  },
  methods: {
    ...mapMutations([
      'hideUserModal',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
