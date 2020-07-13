import _ from 'lodash';

function mjmlFormater(node) {
  if (node.$children.length > 0) {
    node.$children.forEach((el) => {
      if (node.mjml) {
        const elMjml = mjmlFormater(el);
        const nodes = _.filter(node.mjml.children, (e) => e.id != elMjml.id);
        nodes.push(elMjml);
        node.mjml.children = nodes;
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
