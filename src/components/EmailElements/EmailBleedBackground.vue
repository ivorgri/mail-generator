<template>
  <!-- Full Bleed Background Section : BEGIN -->
  <table role="presentation"
    :bgcolor="getValueByName('backgroundColor')"
    cellspacing="0"
    cellpadding="0"
    border="0"
    align="center"
    width="100%">
    <tr class="element-container" data-qa="email-bleed-background">
      <td valign="top" align="center"
        class="editable-element">
        <div style="max-width: 600px; margin: auto;" class="email-container">
          <!--[if mso]>
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="600"
            align="center">
          <tr>
          <td>
          <![endif]-->
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%">
            <tr>
              <td style="padding: 40px;
                text-align: left;
                font-family: sans-serif;
                font-size: 15px;
                line-height: 140%;"
                :style="{ color: getValueByName('textColor') }">
                <p style="margin: 0;">{{ getValueByName('content') }}</p>
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </div>
      </td>
      <!-- Element actions: BEGIN -->
      <element-action-buttons :element="element"/>
      <!-- Element actions: END -->
    </tr>
  </table>
  <!-- Full Bleed Background Section : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'EmailBleedBackground',
  mixins: [elementBase],
};
</script>
