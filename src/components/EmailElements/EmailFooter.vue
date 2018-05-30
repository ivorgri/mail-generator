<template>
  <!-- Email Footer : BEGIN -->
  <table role="presentation"
    cellspacing="0"
    cellpadding="0"
    border="0"
    align="center"
    width="100%"
    style="max-width: 680px;
      font-family: sans-serif;
      font-size: 12px;
      line-height: 140%;"
    :style="{ color: getValueByName('txtcolor') }">
    <tr class="element-container">
      <td style="padding: 40px 10px;
        width: 100%;
        font-family: sans-serif;
        font-size: 12px;
        line-height: 140%;
        text-align: center;"
        :style="{ color: getValueByName('txtcolor') }"
        class="editable-element x-gmail-data-detectors">
        <a style="text-decoration: underline;
          font-weight: bold;"
          :style="{ color: getValueByName('webversioncolor') }">
          View as a Web Page
        </a>
        <br><br>
        Company Name<br>123 Fake Street, SpringField, OR, 97477 US<br>(123) 456-7890
        <br><br>
        <a style="text-decoration: underline;"
          :style="{ color: getValueByName('txtcolor') }">
          unsubscribe
        </a>
      </td>
      <!-- Element actions: BEGIN -->
      <element-action-buttons :element="element"/>
      <!-- Element actions: END -->
    </tr>
  </table>
  <!-- Email Footer : END -->
</template>

<script>
const ElementActionButtons = () => import(/* webpackChunkName: "actionbuttons" */ '@/components/EmailElements/ElementActionButtons.vue');

export default {
  name: 'EmailFooter',
  components: {
    ElementActionButtons,
  },
  props: ['element'],
  methods: {
    getValueByName(name) {
      let value = false;
      this.element.values.forEach((elementValue) => {
        if (name === elementValue.name) {
          ({ value } = elementValue);
        }
      });
      return value;
    },
  },
};
</script>
