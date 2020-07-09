<template>
  <table
    :align="children.settings.align"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    :class="{
      'social-vertical': vertical,
      'social-horizontal': !vertical,
    }"
  >
    <tr>
      <td style="padding:4px;">
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="border-radius:3px;"
          :style="children.settings.width"
        >
          <tr>
            <td
              style="font-size:0;height:30px;vertical-align:middle;"
              :style="children.settings.width"
            >
              <a :href="children.settings.href" target="_blank">
                <img
                  :alt="children.settings.alt"
                  :src="children.settings.src"
                  style="border-radius:3px;display:block;"
                  :width="children.settings.width"
                  :height="children.settings.width"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
      <td style="vertical-align:middle;">
        <a
          :href="children.settings.href"
          style="text-decoration:none;"
          :style="{
            color: children.settings.color,
            'font-size': children.settings['font-size'],
            'font-weight': children.settings['font-weight'],
            'font-style': children.settings['font-style'],
            'font-family': children.settings['font-family'],
            'line-height': children.settings['line-height'],
          }"
          target="_blank"
        >
          {{ children.settings.text }}
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    children: {
      type: Object,
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mjml: {
        tagName: "mj-social-element",
        attributes: {},
        children: [],
      },
    };
  },
  mounted() {
    console.log(this.children.settings);
  },
};
</script>
