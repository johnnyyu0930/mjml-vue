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
  props: {
    settings: {
      type: Object
    }
  },
  computed: {
    mjml() {
      return this.$children.map((el) => mjmlFormater(el));
    },
    columnWidth() {
      const count = this.settings.length;
      if (count !== undefined) {
        return parseInt((100 / count, 10))
      } else {
        return "100%"
      }

    }
  },
};
