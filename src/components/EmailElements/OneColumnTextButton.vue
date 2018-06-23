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
              {{ getValueByName('title') }}
            </h1>
            <p style="margin: 0 0 10px;">{{ getValueByName('content') }}</p>
            <ul style="padding: 0; margin: 0; list-style-type: disc;">
              <li v-for="(listItem, index) in listItems"
                :key="index"
                :class="[listItem.class]"
                :style="[listItem.style]">{{ listItem.content }}</li>
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
  name: 'OneColumnTextButton',
  mixins: [elementBase],
  computed: {
    listItems() {
      const list = this.getValueByName('list').split('|');
      const alteredList = [];
      list.forEach((listItem, index) => {
        let style = '';
        let className = '';
        if (index === 0) {
          className = { 'list-item-first': true };
          style = { margin: '0 0 10px 20px' };
        } else if (index === list.length - 1) {
          className = { 'list-item-last': true };
          style = { margin: '0 0 0 20px' };
        } else {
          style = { margin: '0 0 10px 20px' };
        }
        alteredList.push({
          content: listItem,
          class: className,
          style,
        });
      });
      return alteredList;
    },
  },
};
</script>
