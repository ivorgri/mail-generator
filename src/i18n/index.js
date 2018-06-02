import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  /* eslint-disable quote-props */
  en: {
    /* General */
    'language': 'language',
    'logout': 'log out',
    'cancel': 'cancel',
    'save': 'save',
    'select': 'select',
    'name': 'name',
    'description': 'description',
    'color': 'color',
    /* UserView */
    'anonymous': 'anonymous',
    'user': 'user',
    'editUser': 'edit @:user',
    'saveAndLogin': '@:user @:save and @:select',
    'createUser': 'create @:user',
    'updateUser': 'update @:user',
    'selectUser': 'select @:user',
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
    /* Templates */
    'template': 'template',
    'templates': 'templates',
    'noTemplates': 'no @:templates',
    'addTemplate': 'add @:template',
    'openTemplates': 'open @:templates',
    'createTemplate': 'create @:template',
    'updateTemplate': 'update @:template',
    'editTemplate': 'edit @:template',
    'templateName': 'name of @:template',
    'templateDescription': 'description of @:template',
    'saveAndOpenTemplate': 'save and open @:template',
    'templateColor': '@:template @:color',
    /* Elements */
    'element': 'element',
    'elements': 'elements',
    'openElements': 'open @:elements',
    'addElements': 'add @:elements',
    'chooseElement': 'choose one or more @:element',
    'editElement': 'edit @:element',
    'updateElement': 'update @:element',
    /* Core Elements */
    'emailHeader': 'e-mail header',
    'heroImage': 'hero image',
    'oneColumnTextButton': '1 column text + button',
    'backgroundImageText': 'background image with text',
    'twoEvenColumns': '2 even columns',
    'threeEvenColumns': '3 even columns',
    'thumbnailLeftTextRight': 'thumbnail left, text right',
    'thumbnailRightTextLeft': 'thumbnail right, text left',
    'clearSpacer': 'clear spacer',
    'oneColumnText': '1 column text',
    'emailFooter': 'e-mail footer',
    'emailBleedBackground': 'e-mail full bleed background section',
  },
  nl: {
    /* General */
    'language': 'taal',
    'logout': 'uitloggen',
    'cancel': 'annuleer',
    'save': 'opslaan',
    'select': 'selecteer',
    'name': 'naam',
    'description': 'beschrijving',
    'color': 'kleur',
    /* UserView */
    'anonymous': 'anoniem',
    'user': 'gebruiker',
    'editUser': 'pas @:user aan',
    'saveAndLogin': '@:user @:save en selecteren',
    'createUser': '@:user aanmaken',
    'updateUser': 'pas @:user aan',
    'selectUser': 'selecteer @:user',
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
    /* Templates */
    'template': 'sjabloon',
    'templates': 'sjablonen',
    'noTemplates': 'geen @:templates',
    'addTemplate': 'voeg @:template toe',
    'openTemplates': 'open @:templates',
    'createTemplate': 'maak @:template',
    'updateTemplate': 'pas @:template aan',
    'editTemplate': 'pas @:template aan',
    'templateName': 'naam van @:template',
    'templateDescription': 'beschrijving van @:template',
    'saveAndOpenTemplate': 'bewaar en open @:template',
    'templateColor': '@:template @:color',
    /* Elements */
    'element': 'element',
    'elements': 'elementen',
    'openElements': 'open @:elements',
    'addElements': 'voeg @:elements toe',
    'chooseElement': 'kies een of meer @:elements',
    'editElement': 'pas @:element aan',
    'updateElement': 'pas @:element aan',
    /* Core Elements */
    'emailHeader': 'e-mail header',
    'heroImage': 'hero afbeelding',
    'oneColumnTextButton': '1 kolom tekst + knop',
    'backgroundImageText': 'achtergrond afbeelding met tekst',
    'twoEvenColumns': '2 gelijke kolommen',
    'threeEvenColumns': '3 gelijke kolommen',
    'thumbnailLeftTextRight': 'thumbnail links, tekst rechts',
    'thumbnailRightTextLeft': 'thumbnail rechts, tekst links',
    'clearSpacer': 'lege tussenruimte',
    'oneColumnText': '1 kolom tekst',
    'emailFooter': 'e-mail footer',
    'emailBleedBackground': 'e-mail volledige breedte sectie',
  },
  /* eslint-enable */
};

export default new VueI18n({
  locale: 'nl',
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: true,
});

