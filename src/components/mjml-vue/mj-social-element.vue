<template>
  <table
    :align="settings.align"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    :class="{
      'social-vertical': settings.vertical,
      'social-horizontal': !settings.vertical,
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
          :style="settings.width"
        >
          <tr>
            <td
              style="font-size:0;height:30px;vertical-align:middle;"
              :style="settings.width"
            >
              <a :href="settings.href" target="_blank">
                <img
                  :alt="settings.alt"
                  :src="settings.src"
                  style="border-radius:3px;display:block;"
                  :width="settings.width"
                  :height="settings.width"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
      <td style="vertical-align:middle;">
        <a
          :href="settings.href"
          style="text-decoration:none;"
          :style="{
            color: settings.color,
            'font-size': settings['font-size'],
            'font-weight': settings['font-weight'],
            'font-style': settings['font-style'],
            'font-family': settings['font-family'],
            'line-height': settings['line-height'],
          }"
          target="_blank"
        >
          {{ settings.text }}
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function () {
        return {
          align: "right",
          color: "#aaaaaa",
          text: "facebook",
          vertical: false,
          'font-size': "13px",
          'font-weight': "500",
          'font-style': "normal",
          'font-family': "Helvatica",
          'line-height': "1.2",
          width: "30px",
          src: require('../../assets/fb.png')
        }
      }
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
  }
};
</script>
