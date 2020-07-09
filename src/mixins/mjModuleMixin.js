function mjmlFormater(node) {
  if (node.$children.length > 0) {
    node.$children.forEach((el) => {
      if (node.mjml) {
        node.mjml.children.push(mjmlFormater(el));
      }
    });
  }
  return node.mjml;
}

export default {
  computed: {
    mjml() {
      return this.$children.map((el) => mjmlFormater(el));
    },
  },
  props: {
    settings: {
      type: Object,
    },
  },
};
