<template>
  <div id="email-content">
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
          :style="{ 'background-color': getValueByName('backgroundColor') || '#222222' }">
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
            {{ getValueByName('inboxPreview') }}
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

          <email-header v-if="elementExists(1)" :element="elementById(1)"/>

          <div v-for="element in elementList" :key="element.id"
            data-qa="email-element">
            <hero-image v-if="element.coreElementId === 2" :element="element"/>
            <one-column-text-button v-if="element.coreElementId === 3" :element="element"/>
            <background-image-text v-if="element.coreElementId === 4" :element="element"/>
            <two-even-columns v-if="element.coreElementId === 5" :element="element"/>
            <three-even-columns v-if="element.coreElementId === 6" :element="element"/>
            <thumbnail-left-text-right v-if="element.coreElementId === 7" :element="element"/>
            <thumbnail-right-text-left v-if="element.coreElementId === 8" :element="element"/>
            <spacer v-if="element.coreElementId === 9" :element="element"/>
            <one-column-text v-if="element.coreElementId === 10" :element="element"/>
            <custom-element v-if="element.coreElementId === 13" :element="element"/>
          </div>

        </table>
        <!-- Email Body : END -->

        <email-footer v-if="elementExists(11)" :element="elementById(11)"/>

        <email-bleed-background v-if="elementExists(12)" :element="elementById(12)"/>

      </center>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isEmpty } from 'lodash';

const EmailHeader = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailHeader.vue');
const HeroImage = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/HeroImage.vue');
const OneColumnTextButton = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/OneColumnTextButton.vue');
const EmailFooter = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailFooter.vue');
const EmailBleedBackground = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/EmailBleedBackground.vue');
const BackgroundImageText = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/BackgroundImageText.vue');
const TwoEvenColumns = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/TwoEvenColumns.vue');
const ThreeEvenColumns = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/ThreeEvenColumns.vue');
const ThumbnailLeftTextRight = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/ThumbnailLeftTextRight.vue');
const ThumbnailRightTextLeft = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/ThumbnailRightTextLeft.vue');
const Spacer = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/Spacer.vue');
const OneColumnText = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/OneColumnText.vue');
const CustomElement = () => import(/* webpackChunkName: "emailElements" */ '@/components/EmailElements/CustomElement.vue');

export default {
  name: 'Elements',
  components: {
    EmailHeader,
    HeroImage,
    OneColumnTextButton,
    EmailFooter,
    EmailBleedBackground,
    BackgroundImageText,
    TwoEvenColumns,
    ThreeEvenColumns,
    ThumbnailLeftTextRight,
    ThumbnailRightTextLeft,
    Spacer,
    OneColumnText,
    CustomElement,
  },
  computed: {
    ...mapGetters([
      'elementList',
      'selectedTemplate',
      'elementById',
    ]),
  },
  methods: {
    getValueByName(name) {
      return this.selectedTemplate[name];
    },
    elementExists(id) {
      const element = this.elementById(id);
      if (isEmpty(element)) {
        return false;
      }
      return element;
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
