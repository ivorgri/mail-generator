<template>
    <!-- Background Image with Text : BEGIN -->
    <tr>
        <!-- Bulletproof Background Images c/o https://backgrounds.cm -->
        <td valign="middle"
          style="text-align: center;
            background-color: #222222;
            background-position: center center !important;
            background-size: cover !important;"
          :style="{ 'background-image': `url('${getValueByName('imageLink')}')` }">
          <!--[if gte mso 9]>
          <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:175px; background-position: center center !important;">
          <v:fill type="tile" :src="getValueByName('imageLink')" color="#222222" />
          <v:textbox inset="0,0,0,0">
          <![endif]-->
          <div>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                      <td valign="middle" style="text-align: center; padding: 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #ffffff;">
                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet malesuada cursus. Maecenas scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut&nbsp;erat.</p>
                      </td>
                  </tr>
              </table>
          </div>
          <!--[if gte mso 9]>
          </v:textbox>
          </v:rect>
          <![endif]-->
      </td>
  </tr>
  <!-- Background Image with Text : END -->
  <!-- 1 Column Text + Button : BEGIN -->
  <tr class="element-container">
    <td class="editable-element"
      :style="{ 'background-color': getValueByName('backgroundColor') } ">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px;"
            :style="{ color: getValueByName('textColor') }">
            <h1 style="margin: 0 0 10px;
              font-size: 25px;
              line-height: 30px;
              color: #333333;
              font-weight: normal;">
              Praesent laoreet malesuada&nbsp;cursus.
              {{ getValueByName('title') }}
            </h1>
            <p style="margin: 0 0 10px;">{{ getValueByName('content') }}</p>
            <ul style="padding: 0; margin: 0; list-style-type: disc;">
              <li style="margin:0 0 10px 20px;" class="list-item-first">A list item.</li>
              <li style="margin:0 0 10px 20px;">Another list item here.</li>
              <li style="margin: 0 0 0 20px;" class="list-item-last">
                Everyone gets a list item, list items for everyone!
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 20px 20px;">
            <!-- Button : BEGIN -->
            <table align="center"
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="margin: auto;">
              <tr>
                <td class="button-td button-td-primary" style="border-radius: 4px;"
                  :style="{ background: getValueByName('buttonColor') }">
                  <a class="button-a button-a-primary"
                    style="border: 1px solid #000000;
                      font-family: sans-serif;
                      font-size: 15px;
                      line-height: 15px;
                      text-decoration: none;
                      padding: 13px 17px;
                      color: #ffffff;
                      display: block;
                      border-radius: 4px;"
                    :style="{ background: getValueByName('buttonColor') }"
                    :href="getValueByName('buttonLink')">
                    {{ getValueByName('buttonText') }}
                  </a>
                </td>
              </tr>
            </table>
            <!-- Button : END -->
          </td>
        </tr>
      </table>
    </td>
    <!-- Element actions: BEGIN -->
    <element-action-buttons :element="element"/>
    <!-- Element actions: END -->
  </tr>
  <!-- 1 Column Text + Button : END -->
</template>

<script>
import elementBase from '@/mixins/elementBase';

export default {
  name: 'EmailBackgroundImageText',
  mixins: [elementBase],
};
</script>
