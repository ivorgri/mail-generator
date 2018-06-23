<template>
    <!-- Background Image with Text : BEGIN -->
    <tr class="element-container">
        <!-- Bulletproof Background Images c/o https://backgrounds.cm -->
        <td
          class="editable-element"
          valign="middle"
          style="text-align: center;
            background-color: #222222;
            background-position: center center !important;
            background-size: cover !important;"
          :style="{ 'background-image': `url('${getValueByName('imageLink')}')` }">
          <!--[if gte mso 9]>
          <v:rect xmlns:v="urn:schemas-microsoft-com:vml"
            fill="true"
            stroke="false"
            style="width:600px;
              height:175px;
              background-position: center center !important;">
          <v:fill type="tile" :src="getValueByName('imageLink')" color="#222222" />
          <v:textbox inset="0,0,0,0">
          <![endif]-->
          <div>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                      <td valign="middle"
                        style="text-align: center;
                          padding: 40px;
                          font-family: sans-serif;
                          font-size: 15px;
                          line-height: 20px;"
                        :style="{ color: getValueByName('textColor') }">
                          <p style="margin: 0;">{{ getValueByName('content') }}</p>
                      </td>
                  </tr>
              </table>
          </div>
          <!--[if gte mso 9]>
          </v:textbox>
          </v:rect>
          <![endif]-->
      </td>
      <!-- Element actions: BEGIN -->
      <element-action-buttons :element="element"/>
      <!-- Element actions: END -->
  </tr>
  <!-- Background Image with Text : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'backgroundImageText',
  mixins: [elementBase],
};
</script>
