<template>
  <!-- Email Header : BEGIN -->
    <tr>
      <td style="padding: 20px 0; text-align: center">
        <img
          width="200"
          height="50"
          border="0"
          style="height: auto;
            background: #dddddd;
            font-family: sans-serif;
            font-size: 15px;
            line-height: 140%;
            color: #555555;"
          :src="getValueByName('image_link')"
          :alt="getValueByName('image_link_alt')">
      </td>
    </tr>
    <!-- Email Header : END -->
</template>

<script>
export default {
  name: 'EmailHeader',
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
