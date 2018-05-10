<template>
  <div v-if="showUserModal" id="user-modal" class="modal"
  :class="{ 'is-active': showUserModal }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div v-if="userModalAction === 'select'" class="box">
        <h1 class="title">{{ $t('selectUserModalTitle') | capitalize }}</h1>
        <div class="buttons">
          <button class="button"
            @click="hideUserModal">{{ $t('cancel') | capitalize }}</button>
          <button class="button is-success"
            :disabled="!entriesAreValid"
            @click="selectUser(model)">{{ $t('selectUser') | capitalize }}</button>
        </div>
      </div>
      <div v-else class="box">
        <h1 class="title">{{ $t('userModalTitle') | capitalize }}</h1>
        <form>
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
            :tag="tag"
            @validated="onValidated">
          </vue-form-generator>
        </form>
        <div class="buttons">
          <button class="button"
            @click="hideUserModal">{{ $t('cancel') | capitalize }}</button>
          <button class="button is-success"
            :disabled="!entriesAreValid"
            @click="addUser(model)">{{ $t('save') | capitalize }}</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"
      @click="hideUserModal"></button>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

import { mapGetters, mapMutations, mapActions } from 'vuex';
import { capitalize, isEmpty, cloneDeep } from 'lodash';

export default {
  name: 'UserModal',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  mounted() {
    console.log(VueFormGenerator);
    VueFormGenerator.validators.resources.fieldIsRequired = capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = capitalize(this.$t('textTooSmall'));
  },
  data() {
    return {
      entriesAreValid: true,
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: capitalize(this.$t('name')),
          model: 'name',
          id: 'user_name',
          placeholder: capitalize(this.$t('yourName')),
          min: 3,
          validator: VueFormGenerator.validators.string,
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
      'userModalAction',
      'selectedUser',
    ]),
    model() {
      if (isEmpty(this.selectedUser)) {
        return {
          id: new Date().toJSON(),
          name: '',
        };
      }
      return cloneDeep(this.selectedUser);
    },
  },
  methods: {
    ...mapMutations([
      'hideUserModal',
    ]),
    ...mapActions([
      'addUser',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
