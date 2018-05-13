<template>
  <section id="user" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <h5 v-if="!this.user"
            class="title is-5">
            {{ $t('createUser') | capitalize }}
          </h5>
          <h5 v-if="this.user"
            class="title is-5">
            {{ $t('updateUser') | capitalize }}
          </h5>
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
              @click="cancel">{{ $t('cancel') | capitalize }}</button>
            <button v-if="!this.user"
              class="button is-success"
              :disabled="!entriesAreValid"
              @click="createAndSelectUser">{{ $t('saveAndLogin') | capitalize }}</button>
            <button v-if="this.user"
              class="button is-success"
              :disabled="!entriesAreValid"
              @click="updateUser">{{ $t('updateUser') | capitalize }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import { mapGetters, mapMutations } from 'vuex';
import { capitalize, isEmpty, cloneDeep } from 'lodash';

export default {
  name: 'User',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  props: ['user'],
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
        }, {
          type: 'select',
          inputType: 'select',
          label: capitalize(this.$t('language')),
          model: 'locale',
          id: 'locale',
          values: () => [
            { id: 'en', name: 'English' },
            { id: 'nl', name: 'Nederlands' },
          ],
          default: 'nl',
          selectOptions: {
            hideNoneSelectedText: true,
          },
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
  mounted() {
    VueFormGenerator.validators.resources.fieldIsRequired = capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = capitalize(this.$t('textTooSmall'));
  },
  computed: {
    ...mapGetters([
      'db',
    ]),
    model() {
      if (isEmpty(this.user)) {
        return {
          name: '',
          locale: 'nl',
        };
      }
      return this.user;
    },
  },
  methods: {
    ...mapMutations([
      'selectUser',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.user.resync();
      this.$router.push('collections');
    },
    async createAndSelectUser() {
      const user = cloneDeep(this.model);
      user.id = `${new Date().toJSON()}${this.model.name}`;
      user.createTime = new Date().toJSON();
      try {
        await this.db.users.upsert(user);
      } catch (error) {
        console.log(error);
      }
      this.selectUser(user.id);
      this.$router.push('collections');
    },
    async updateUser() {
      try {
        await this.user.save();
      } catch (error) {
        console.log(error);
      }
      this.$router.push('collections');
    },
  },
};
</script>
