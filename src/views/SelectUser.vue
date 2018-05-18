<template>
  <div class="columns">
    <div class="column is-one-third">
      <h5 class="title is-5">{{ $t('selectUser') | capitalize }}</h5>
      <form>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
          :tag="tag">
        </vue-form-generator>
      </form>
      <div class="buttons">
        <button class="button"
          @click="cancel">{{ $t('cancel') | capitalize }}</button>
        <button class="button is-success"
          @click="saveSelectedUser">{{ $t('selectUser') | capitalize }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapMutations } from 'vuex';
import { capitalize, forEach } from 'lodash';

export default {
  name: 'SelectUser',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  data() {
    return {
      model: {},
      schema: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'user-',
      },
      tag: 'div',
    };
  },
  created() {
    this.model = {
      selectedUser: this.selectedUserId,
    };
    this.schema = {
      fields: [{
        type: 'select',
        inputType: 'select',
        label: capitalize(this.$t('user')),
        model: 'selectedUser',
        id: 'selectedUser',
        values: () => this.selectArray,
        default: this.selectedUserId,
        selectOptions: {
          hideNoneSelectedText: true,
        },
      }],
    };
  },
  computed: {
    ...mapGetters([
      'users',
      'selectedUserId',
    ]),
    selectArray() {
      const selectArray = [];
      forEach(this.users, (user, userId) => {
        selectArray.push({
          id: userId,
          name: user.name !== undefined ? user.name : '--',
        });
      });
      return selectArray;
    },
  },
  methods: {
    ...mapMutations([
      'selectUser',
      'selectCollection',
    ]),
    cancel() {
      this.$router.push('collections');
    },
    saveSelectedUser() {
      this.selectUser(this.model.selectedUser);
      this.selectCollection(this.users[this.model.selectedUser].selectedCollectionId);
      this.$router.push('collections');
    },
  },
};
</script>
