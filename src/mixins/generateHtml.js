import { isEmpty } from 'lodash';

const generateHtml = {
  props: {
    template: {
      type: Object,
    },
  },
  methods: {
    elementExists(id) {
      const element = this.elementById(id);
      if (isEmpty(element)) {
        return false;
      }
      return element;
    },
    generateElementHtml(element, renderInView) {
      let elementHtml = '';
      console.log(element);
      switch (element.coreElementId) {
        // Email Header
        case 1:
          elementHtml = '<!-- Email Header : BEGIN -->\
            <tr><td style="padding: 20px 0; text-align: center"><img\
                  src="${element.model.imageLink}"\
                  width="200"\
                  height="50"\
                  alt="${element.model.imageAltText}"\
                  border="0"\
                  style="height: auto;\
                  background: #dddddd;\
                  font-family: sans-serif;\
                  font-size: 15px;\
                  line-height: 15px;\
                  color: #555555;">\
              </td>\
            </tr>\
            <!-- Email Header : END -->';
          if (renderInView) {
            elementHtml = elementHtml.replace(
              '<tr>',
              '<tr class="element-container" data-qa="email-header">'
            );
            console.log(elementHtml);
            elementHtml = elementHtml.replace(
              '<td',
              '<td class="editable-element"'
            );
            console.log(elementHtml);
            elementHtml = elementHtml.replace(
              '</td>',
              'element-action-buttons</td>'
            );
            console.log(elementHtml);
            elementHtml = elementHtml.split('element-action-buttons');
            console.log(elementHtml);
          }
          console.log(elementHtml);
          break;
        default:
          elementHtml = '';
      }
      return elementHtml;
    },
  },
};

export { generateHtml as default };
