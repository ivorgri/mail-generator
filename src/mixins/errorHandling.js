import { mapMutations } from 'vuex';

const errorHandling = {
  methods: {
    ...mapMutations([
      'addError',
    ]),
  },
};

export { errorHandling as default };
