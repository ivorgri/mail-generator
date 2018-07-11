<template>
  <!-- Thumbnail Right, Text Left : BEGIN -->
  <tr class="element-container">
    <td class="editable-element"
      dir="rtl"
      valign="top"
      width="100%"
      style="padding: 10px; background-color: #ffffff;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <!-- Column : BEGIN -->
          <td width="33.33%" class="stack-column-center">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td dir="ltr" valign="top" style="padding: 0 10px;">
                  <img
                    width="170"
                    height="170"
                    border="0"
                    class="center-on-narrow"
                    style="height: auto;
                      background: #dddddd;
                      font-family: sans-serif;
                      font-size: 15px;
                      line-height: 15px;
                      color: #555555;"
                    :src="getValueByName('imageLink')"
                    :alt="getValueByName('imageAltText')">
                </td>
              </tr>
            </table>
          </td>
          <!-- Column : END -->
          <!-- Column : BEGIN -->
          <td width="66.66%" class="stack-column-center">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td dir="ltr"
                  valign="top"
                  style="font-family: sans-serif;
                    font-size: 15px;
                    line-height: 20px;
                    color: #555555;
                    padding: 10px;
                    text-align: left;"
                  class="center-on-narrow">
                  <h2 style="margin: 0 0 10px 0;
                    font-family: sans-serif;
                    font-size: 18px;
                    line-height: 22px;
                    color: #333333;
                    font-weight: bold;">{{ getValueByName('title') }}</h2>
                  <p style="margin: 0 0 10px 0;">{{ getValueByName('content') }}</p>
                  <!-- Button : BEGIN -->
                  <table role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    class="center-on-narrow"
                    style="float:left;">
                    <tr>
                      <td class="button-td button-td-primary"
                        style="border-radius: 4px;"
                        :style="{ background: getValueByName('buttonColor') }">
                        <a class="button-a button-a-primary"
                          style="font-family: sans-serif;
                            font-size: 15px;
                            line-height: 15px;
                            text-decoration: none;
                            padding: 13px 17px;
                            display: block;
                            border-radius: 4px;"
                          :style="{ background: getValueByName('buttonColor'),
                            color: getValueByName('buttonTextColor'),
                            border: `1px solid ${getValueByName('buttonColor')}` }"
                          :href="getValueByName('buttonLink')">
                              {{ getValueByName('buttonText') }}</a>
                      </td>
                    </tr>
                  </table>
                  <!-- Button : END -->
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
  <!-- Thumbnail Right, Text Left : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'ThumbnailRightTextLeft',
  mixins: [elementBase],
};
</script>
