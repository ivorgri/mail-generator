<template>
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
const ElementActionButtons = () => import(/* webpackChunkName: "actionbuttons" */ '@/components/EmailElements/ElementActionButtons.vue');

export default {
  name: 'EmailHeader',
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
