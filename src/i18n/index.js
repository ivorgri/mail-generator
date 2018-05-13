import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  /* eslint-disable quote-props */
  en: {
    /* UserView */
    'anonymous': 'anonymous',
    'user': 'user',
    'language': 'language',
    'editUser': 'edit @:user',
    'logout': 'log out',
    'cancel': 'cancel',
    'save': 'save',
    'select': 'select',
    'saveAndLogin': '@:user @:save and @:select',
    'createUser': 'create @:user',
    'updateUser': 'update @:user',
    'selectUser': 'select @:user',
    'name': 'name',
    'description': 'description',
    'yourName': 'your name',
    /* Validators */
    'fieldIsRequired': 'this field is required',
    'textTooSmall': 'too short, should be {1} and is {0}',
    'noneSelectedText': '@:select @:language',
    /* Collections */
    'collection': 'collection',
    'collections': 'collections',
    'noCollections': 'no @:collections',
    'addCollection': 'add @:collection',
    'openCollections': 'open @:collections',
    'createCollection': 'create @:collection',
    'updateCollection': 'update @:collection',
    'editCollection': 'edit @:collection',
    'collectionName': 'name of @:collection',
    'collectionDescription': 'description of @:collection',
    'saveAndOpenCollection': 'save and open @:collection',
  },
  nl: {
    /* UserView */
    'anonymous': 'anoniem',
    'user': 'gebruiker',
    'language': 'taal',
    'editUser': 'pas @:user aan',
    'logout': 'uitloggen',
    'cancel': 'annuleer',
    'save': 'opslaan',
    'select': 'selecteer',
    'saveAndLogin': '@:user @:save en selecteren',
    'createUser': '@:user aanmaken',
    'updateUser': 'pas @:user aan',
    'selectUser': 'selecteer @:user',
    'name': 'naam',
    'description': 'beschrijving',
    'yourName': 'jouw naam',
    /* Validators */
    'fieldIsRequired': 'dit veld is verplicht',
    'textTooSmall': 'te kort, zou {1} moeten zijn en is {0}',
    'noneSelectedText': '@:select @:language',
    /* Collections */
    'collection': 'collectie',
    'collections': 'collecties',
    'noCollections': 'geen @:collections',
    'addCollection': 'voeg @:collection toe',
    'openCollections': 'open @:collections',
    'createCollection': 'maak @:collection aan',
    'updateCollection': 'pas @:collection aan',
    'editCollection': 'pas @:collection aan',
    'collectionName': 'naam van @:collection',
    'collectionDescription': 'beschrijving van @:collection',
    'saveAndOpenCollection': 'bewaar en open @:collection',
  },
  /* eslint-enable */
};

export default new VueI18n({
  locale: 'nl',
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: true,
});

