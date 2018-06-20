const BaseButtons = () => import(/* webpackChunkName: "base" */ '@/components/BaseButtons.vue');

const baseButtonState = {
  components: {
    BaseButtons,
  },
  data() {
    return {
      cancelling: false,
      submitting: false,
    };
  },
};

export { baseButtonState as default };
