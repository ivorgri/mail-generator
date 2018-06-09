<template>
  <!-- Hero Image, Flush : BEGIN -->
  <tr class="element-container">
    <td class="editable-element"
      :style="{ 'background-color': getValueByName('backgroundColor') } ">
      <img width="600"
        height=""

        border="0"
        style="width: 100%;
          max-width: 600px;
          height: auto;
          background: #dddddd;
          font-family: sans-serif;
          font-size: 15px;
          line-height: 15px;
          margin: auto;"
        :style="{ color: getValueByName('color') }"
        class="g-img"
        :src="getValueByName('imageLink')"
        :alt="getValueByName('imageAltText')">
    </td>
    <!-- Element actions: BEGIN -->
    <element-action-buttons :element="element"/>
    <!-- Element actions: END -->
  </tr>
  <!-- Hero Image, Flush : END -->
</template>

<script>
const ElementActionButtons = () => import(/* webpackChunkName: "actionbuttons" */ '@/components/EmailElements/ElementActionButtons.vue');

export default {
  name: 'HeroImage',
  components: {
    ElementActionButtons,
  },
  props: ['element'],
  methods: {
    getValueByName(name) {
      return this.element.model[name];
    },
  },
};
</script>
