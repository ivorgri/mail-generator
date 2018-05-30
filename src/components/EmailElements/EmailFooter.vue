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
      color: #888888;
      font-size: 12px;
      line-height: 140%;">
    <tr>
      <td style="padding: 40px 10px;
        width: 100%;
        font-family: sans-serif;
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        color: #888888;"
        class="x-gmail-data-detectors">
        <webversion style="color: #cccccc;
          text-decoration: underline;
          font-weight: bold;">
          View as a Web Page
        </webversion>
        <br><br>
        Company Name<br>123 Fake Street, SpringField, OR, 97477 US<br>(123) 456-7890
        <br><br>
        <unsubscribe style="color: #888888;
          text-decoration: underline;">
          unsubscribe
        </unsubscribe>
      </td>
    </tr>
  </table>
  <!-- Email Footer : END -->
</template>

<script>
export default {
  name: 'EmailFooter',
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
