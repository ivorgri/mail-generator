<template>
  <section id="collection" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <h5 v-if="!this.collection" class="title is-5">
            {{ $t('createCollection') | capitalize }}
          </h5>
          <h5 v-if="this.collection"
            class="title is-5">
            {{ $t('updateCollection') | capitalize }}
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
            <button v-if="!this.collection"
              class="button is-success"
              :disabled="!entriesAreValid"
              @click="createAndSelectCollection">
                {{ $t('saveAndOpenCollection') | capitalize }}
            </button>
            <button v-if="this.collection"
              class="button is-success"
              :disabled="!entriesAreValid"
              @click="updateCollection">{{ $t('updateCollection') | capitalize }}</button>
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
  name: 'Collection',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  props: ['collection'],
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
          placeholder: capitalize(this.$t('collectionName')),
          min: 3,
          validator: VueFormGenerator.validators.string,
          required: true,
        }, {
          type: 'textArea',
          label: capitalize(this.$t('description')),
          model: 'description',
          id: 'description',
          placeholder: capitalize(this.$t('collectionDescription')),
        }],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'collection-',
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
      'collectionsDB',
    ]),
    model() {
      if (isEmpty(this.collection)) {
        return {
          name: '',
          description: '',
        };
      }
      return cloneDeep(this.collection);
    },
  },
  methods: {
    ...mapMutations([
      'selectCollection',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.$router.push('collections');
    },
    async createAndSelectCollection() {
      const collection = cloneDeep(this.model);
      // eslint-disable-next-line
      collection._id = `${new Date().toJSON()}${this.model.name}`;
      try {
        await this.collectionsDB.put(collection);
      } catch (error) {
        console.log(error);
      }
      // eslint-disable-next-line
      this.selectCollection(collection._id);
      this.$router.push('collections');
    },
    async updateCollection() {
      const collection = cloneDeep(this.model);
      try {
        await this.collectionsDB.put(collection);
      } catch (error) {
        console.log(error);
      }
      this.$router.push('collections');
    },
  },
};
</script>
