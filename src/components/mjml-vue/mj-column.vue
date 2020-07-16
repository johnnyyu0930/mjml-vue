<template>
  <div
    class="mj-column-width mj-outlook-group-fix"
    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width: 100%"
    :style="{ '--width': columnWidth }"
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      width="100%"
      :class="{ 'mj-full-width-mobile ': settings.stack }"
    >
      <tbody>
        <tr>
          <td
            style="vertical-align:top;"
            :style="{
              'background-color': settings['background-color'],
              'padding-top': settings['padding-top'],
              'padding-right': settings['padding-right'],
              'padding-bottom': settings['padding-bottom'],
              'padding-left': settings['padding-left'],
            }"
          >
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
              <slot></slot>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columnWidth: {
      type: String,
      default: "100%" // section 中有一個以上的 column 才會生效，不然都是 100%
    },
    settings: {
      type: Object,
      default: function() {
        return {
          stack: false,
          "padding-top": "10px",
          "padding-right": "10px",
          "padding-left": "10px",
          "padding-bottom": "10px",
          "background-color": "",
        };
      },
    },
  },
  data() {
    return {
      mjml: {
        tagName: "mj-column",
        attributes: {},
        children: [],
      },
    };
  },
};
</script>

<style lang="css">
.mj-outlook-group-fix {
  width: 100% !important;
}
@media only screen and (min-width: 480px) {
  .mj-column-width {
    width: var(--width) !important;
    max-width: var(--width);
  }
}
</style>
