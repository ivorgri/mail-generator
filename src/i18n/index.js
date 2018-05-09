import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  /* eslint-disable quote-props */
  en: {
    'anonymous': 'Anonymous',
    'user': 'user',
    'language': 'Language',
    'login': 'Login @:user',
    'changeName': 'Change name',
    'logout': 'Log out',
  },
  nl: {
    'anonymous': 'Anoniem',
    'user': 'gebruiker',
    'language': 'Taal',
    'login': 'Inloggen',
    'changeName': 'Verander naam',
    'logout': 'Uitloggen',
  },
  /* eslint-enable */
};

export default new VueI18n({
  locale: 'nl',
  messages,
  silentTranslationWarn: true,
});

