<template>
  <!-- Email Header : BEGIN -->
  <tr class="element-container">
    <td class="editable-element" style="padding: 20px 0; text-align: center">
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
        :src="getValueByName('imageLink')"
        :alt="getValueByName('imageLinkAlt')">
    </td>
    <!-- Element actions: BEGIN -->
    <element-action-buttons :element="element"/>
    <!-- Element actions: END -->
  </tr>
  <!-- Email Header : END -->
</template>

<script>
const ElementActionButtons = () => import(/* webpackChunkName: "actionbuttons" */ '@/components/EmailElements/ElementActionButtons.vue');

export default {
  name: 'EmailHeader',
  components: {
    ElementActionButtons,
  },
  props: ['element'],
  methods: {
    getValueByName(name) {
      console.log(this.element);
      return this.element.model[name];
    },
  },
};
</script>
