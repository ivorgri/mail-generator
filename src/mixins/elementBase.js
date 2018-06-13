const ElementActionButtons = () => import(/* webpackChunkName: "actionbuttons" */ '@/components/EmailElements/ElementActionButtons.vue');

const getValueByName = {
  props: ['element'],
  components: {
    ElementActionButtons,
  },
  methods: {
    getValueByName(name) {
      return this.element.model[name];
    },
  },
};

export { getValueByName as default };
