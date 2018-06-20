<template>
  <div width="100%" style="margin: 0; mso-line-height-rule: exactly;"
    :style="{ 'background-color': getValueByName('backgroundColor') || '#222222' }">
    <center style="width: 100%; text-align: left;"
      :style="{ 'background-color': getValueByName('backgroundColor') || '#222222' }">
      <!--[if mso | IE]>
      <table role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        style="background-color: #222222;">
      <tr>
      <td>
      <![endif]-->

      <!-- Visually Hidden Preheader Text : BEGIN -->
      <div style="display: none;
        font-size: 1px;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        font-family: sans-serif;">
          (Optional) This text will appear in the inbox preview,
          but not the email body. It can be used to supplement the email
            subject line or even summarize the email's contents. Extended
            text preheaders (~490 characters) seems like a better UX for
            anyone using a screenreader or voice-command apps like Siri
            to dictate the contents of an email. If this text is not included,
            email clients will automatically populate it using the text
            (including image alt text) at the start of the email's body.
      </div>
      <!-- Visually Hidden Preheader Text : END -->

      <!-- Email Body : BEGIN -->
      <table align="center"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="600"
        style="margin: 0 auto;"
        class="email-container">

        <email-header v-if="emailHeader" :element="emailHeader"/>

        <div v-for="element in elementSet" :key="element.id"
          data-qa="email-element">
          <hero-image v-if="element.coreElementId === 2" :element="element"/>
          <one-column-text-button v-if="element.coreElementId === 3" :element="element"/>
        </div>

      </table>
      <!-- Email Body : END -->

      <email-footer v-if="emailFooter" :element="emailFooter"/>

      <email-bleed-background v-if="emailBleedBackground" :element="emailBleedBackground"/>

    </center>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const EmailHeader = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailHeader.vue');
const HeroImage = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/HeroImage.vue');
const OneColumnTextButton = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/oneColumnTextButton.vue');
const EmailFooter = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailFooter.vue');
const EmailBleedBackground = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailBleedBackground.vue');

export default {
  name: 'Elements',
  components: {
    EmailHeader,
    HeroImage,
    OneColumnTextButton,
    EmailFooter,
    EmailBleedBackground,
  },
  computed: {
    ...mapGetters([
      'elementSet',
      'selectedTemplate',
      'elementById',
    ]),
    emailHeader() {
      return this.elementById(1);
    },
    emailFooter() {
      return this.elementById(11);
    },
    emailBleedBackground() {
      return this.elementById(12);
    },
  },
  methods: {
    getValueByName(name) {
      return this.selectedTemplate[name];
    },
  },
};
</script>

<style lang="scss">
.element-container {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(2, auto);

  .editable-element {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 3;
    grid-row-end: 3;
  }

  .element-action-buttons {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-column-end: 3;
    grid-row-end: 2;
    display: none;
    margin: 5px;
    position: relative;
    top: 5px;
    right: 5px;
  }
}

.element-container:hover {
  outline: 1px solid red;
  cursor: pointer;

  .element-action-buttons {
    display: inline;
  }
}

</style>

<style scoped>
/* CSS Reset : BEGIN */

/* What it does: Remove spaces around the email design added by some email clients. */
/* Beware: It can remove the padding / margin and add a background color to the compose
a reply window. */

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
    margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue.
Fix for Yahoo mail table alignment bug.
Applies table-layout to the first 2 tables then removes for anything nested deeper. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}
table table table {
    table-layout: auto;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.x-gmail-data-detectors,    /* Gmail */
.x-gmail-data-detectors *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}
/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Prevents underlining the button text in Windows 10 */
.button-link {
    text-decoration: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app:
https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */
/* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
  /* iPhone 6 and 6+ */
    .email-container {
        min-width: 375px !important;
    }
}

@media screen and (max-width: 480px) {
  /* What it does: Forces Gmail app to display email full width */
  div > u ~ div .gmail {
    min-width: 100vw;
  }
}

/* CSS Reset : END */

/* Progressive Enhancements : BEGIN */

/* What it does: Hover styles for buttons */
.button-td,
.button-a {
    transition: all 100ms ease-in;
}
.button-td:hover,
.button-a:hover {
    background: #555555 !important;
    border-color: #555555 !important;
}

/* Media Queries */
@media screen and (max-width: 600px) {

    .email-container {
        width: 100% !important;
        margin: auto !important;
    }

    /* What it does: Forces elements to resize to the full width of their container.
    Useful for resizing images beyond their max-width. */
    .fluid {
        max-width: 100% !important;
        height: auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    /* What it does: Forces table cells into full-width rows. */
    .stack-column,
    .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
    }
    /* And center justify these ones. */
    .stack-column-center {
        text-align: center !important;
    }

    /* What it does: Generic utility class for centering.
    Useful for images, buttons, and nested tables. */
    .center-on-narrow {
        text-align: center !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
    }
    table.center-on-narrow {
        display: inline-block !important;
    }

    /* What it does: Adjust typography on small screens to improve readability */
    .email-container p {
        font-size: 17px !important;
    }
}
/* Progressive Enhancements : END */
</style>
