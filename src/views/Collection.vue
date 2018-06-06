<template>
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
          @validated="onValidated" data-qa="collection-form">
        </vue-form-generator>
      </form>
      <div class="buttons">
        <button class="button"
          @click="cancel" data-qa="cancel-collection">{{ $t('cancel') | capitalize }}</button>
        <button v-if="!this.collection"
          class="button is-success"
          :disabled="!entriesAreValid"
          @click="createAndSelectCollection" data-qa="create-collection-button">
            {{ $t('saveAndOpenCollection') | capitalize }}
        </button>
        <button v-if="this.collection"
          class="button is-success"
          :disabled="!entriesAreValid"
          @click="updateCollection"
          data-qa="update-collection-button">{{ $t('updateCollection') | capitalize }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapActions } from 'vuex';
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
          id: 'name',
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
      'db',
      'selectedUserId',
      'selectedUser',
    ]),
    model() {
      if (isEmpty(this.collection)) {
        return {
          name: '',
          description: '',
        };
      }
      return this.collection;
    },
  },
  methods: {
    ...mapActions([
      'selectCollection',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.collection.resync();
      // Go back to last page
      this.$router.go(-1);
    },
    async createAndSelectCollection() {
      const collection = cloneDeep(this.model);
      collection.id = `${new Date().toJSON()}${this.model.name}`;
      collection.createTime = new Date().toJSON();
      collection.authorId = this.selectedUserId;
      try {
        await this.db.templatecollections.upsert(collection);
      } catch (error) {
        console.log(error);
      }
      this.selectCollection(collection.id);
      // When creating a collection, always go to the templates overview
      this.$router.push({ name: 'templates' });
    },
    async updateCollection() {
      try {
        await this.collection.save();
      } catch (error) {
        console.log(error);
      }
      // Go back to last page
      this.$router.go(-1);
    },
  },
};
</script>
