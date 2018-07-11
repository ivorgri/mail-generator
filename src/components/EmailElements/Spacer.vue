<template>
  <!-- Clear Spacer : BEGIN -->
  <tr class="element-container">
      <td class="editable-element"
        aria-hidden="true"
        :height="getValueByName('height')"
        style="font-size: 0px;
          line-height: 0px;">
          &nbsp;
      </td>
      <!-- Element actions: BEGIN -->
      <element-action-buttons :element="element"/>
      <!-- Element actions: END -->
  </tr>
  <!-- Clear Spacer : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'Spacer',
  mixins: [elementBase],
};
</script>
