<template>
  <!-- CUSTOM ELEMENT: BEGIN -->
  <tr class="element-container">
    <td class="editable-element" style="background-color: #ffffff;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 20px;
            font-family: sans-serif;
            font-size: 15px;
            line-height: 20px; "
            :style="{ color: getValueByName('textColor') }"
            v-html="getValueByName('htmlContent')">
          </td>
        </tr>
      </table>
    </td>
    <!-- Element actions: BEGIN -->
    <element-action-buttons :element="element"/>
    <!-- Element actions: END -->
  </tr>
  <!-- CUSTOM ELEMENT: END -->

</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'CustomElement',
  mixins: [elementBase],
};
</script>
