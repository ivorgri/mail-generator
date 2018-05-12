import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  /* eslint-disable quote-props */
  en: {
    /* UserModal */
    'anonymous': 'anonymous',
    'user': 'user',
    'language': 'language',
    'createUser': 'create @:user',
    'editUser': 'edit @:user',
    'logout': 'log out',
    'cancel': 'cancel',
    'save': 'save',
    'userModalTitle': 'create @:user',
    'selectUserModalTitle': 'select @:user',
    'name': 'name',
    'yourName': 'your name',
    'selectUser': 'select @:user',
    /* Validators */
    'fieldIsRequired': 'this field is required',
    'textTooSmall': 'too short, should be {1} and is {0}',
    /* Collections */
    'collections': 'collections',
  },
  nl: {
    /* UserModal */
    'anonymous': 'anoniem',
    'user': 'gebruiker',
    'language': 'taal',
    'createUser': 'maak @:user aan',
    'editUser': 'pas @:user aan',
    'logout': 'uitloggen',
    'cancel': 'annuleer',
    'save': 'opslaan',
    'userModalTitle': '@:user aanmaken',
    'selectUserModalTitle': 'selecteer @:user',
    'name': 'naam',
    'yourName': 'jouw naam',
    'selectUser': 'selecteer @:user',
    /* Validators */
    'fieldIsRequired': 'dit veld is verplicht',
    'textTooSmall': 'te kort, zou {1} moeten zijn en is {0}',
    /* Collections */
    'collections': 'collecties',
  },
  /* eslint-enable */
};

export default new VueI18n({
  locale: 'nl',
  messages,
  silentTranslationWarn: true,
});

