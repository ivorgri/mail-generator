<template>
  <!-- 3 Even Columns : BEGIN -->
  <tr class="element-container">
    <td class="editable-element" valign="top" style="padding: 10px; background-color: #ffffff;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <!-- Column : BEGIN -->
          <td width="33.33%" class="stack-column-center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="padding: 10px; text-align: center">
                  <img
                    width="170"
                    height="170"
                    border="0"
                    class="fluid"
                    style="height: auto;
                      background: #dddddd;
                      font-family: sans-serif;
                      font-size: 15px;
                      line-height: 15px;
                      color: #555555;"
                    :src="getValueByName('imageLink')"
                    :alt="getValueByName('imageAltText')" >
                </td>
              </tr>
              <tr>
                <td style="font-family: sans-serif;
                  font-size: 15px;
                  line-height: 20px;
                  color: #555555;
                  padding: 0 10px 10px;
                  text-align: left;"
                  class="center-on-narrow">
                  <p style="margin: 0;">{{ getValueByName('content') }}</p>
                </td>
              </tr>
            </table>
          </td>
          <!-- Column : END -->
          <!-- Column : BEGIN -->
          <td width="33.33%" class="stack-column-center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="padding: 10px; text-align: center">
                 <img
                  width="170"
                  height="170"
                  border="0"
                  class="fluid"
                  style="height: auto;
                    background: #dddddd;
                    font-family: sans-serif;
                    font-size: 15px;
                    line-height: 15px;
                    color: #555555;"
                  :src="getValueByName('imageLink2')"
                  :alt="getValueByName('imageAltText2')" >
                </td>
              </tr>
              <tr>
                <td style="font-family: sans-serif;
                  font-size: 15px;
                  line-height: 20px;
                  color: #555555;
                  padding: 0 10px 10px;
                  text-align: left;"
                  class="center-on-narrow">
                  <p style="margin: 0;">{{ getValueByName('content2') }}</p>
                </td>
              </tr>
            </table>
          </td>
          <!-- Column : END -->
          <!-- Column : BEGIN -->
          <td width="33.33%" class="stack-column-center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="padding: 10px; text-align: center">
                 <img
                  width="170"
                  height="170"
                  border="0"
                  class="fluid"
                  style="height: auto;
                    background: #dddddd;
                    font-family: sans-serif;
                    font-size: 15px;
                    line-height: 15px;
                    color: #555555;"
                  :src="getValueByName('imageLink3')"
                  :alt="getValueByName('imageAltText3')" >
                </td>
              </tr>
              <tr>
                <td style="font-family: sans-serif;
                  font-size: 15px;
                  line-height: 20px;
                  color: #555555;
                  padding: 0 10px 10px;
                  text-align: left;"
                  class="center-on-narrow">
                  <p style="margin: 0;">{{ getValueByName('content3') }}</p>
                </td>
              </tr>
            </table>
          </td>
          <!-- Column : END -->
        </tr>
      </table>
    </td>
    <!-- Element actions: BEGIN -->
    <element-action-buttons :element="element"/>
    <!-- Element actions: END -->
  </tr>
  <!-- 3 Even Columns : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'threeEvenColumns',
  mixins: [elementBase],
};
</script>
