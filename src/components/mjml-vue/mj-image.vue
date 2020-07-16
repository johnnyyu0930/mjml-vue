<template>
  <tr>
    <td
      :align="settings.align"
      style="font-size:0px;padding:10px 25px;word-break:break-word;"
      :style="{padding:`${settings['padding-top']} ${settings['padding-bottom']}`}"
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="border-collapse:collapse;border-spacing:0px;"
        :class="{'mj-full-width-mobile': settings['mj-full-width-mobile']}"
      >
        <tbody>
          <tr>
            <td 
              :style="{width: settings['width']}"
              :class="{'mj-full-width-mobile': settings['mj-full-width-mobile']}"
            >
              <a 
                :href="settings.href"
                target="_blank"
              >
                <img
                  :alt="settings.alt" 
                  :height="settings.auto" 
                  :src="settings.src" 
                  style="border:0;display:block;outline:none;text-decoration:none;"
                  :style="{height: settings.height, width: settings.weight, fontSize: settings['font-size']}"
                  :width="settings.width" 
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>
<script>
export default {
    props: {
    settings: {
      type: Object,
      default: function() {
        return {
          align: "center", // left center right
          alt: "image description",
          "container-background-color": "#aaaaaa",
          href: "javascript:void(0)",
          src: "https://www.online-image-editor.com//styles/2014/images/example_image.png",
          target: "_blank",
          width: "220px", //px
          height: "auto", // px or auto
          "padding-top": "10px",
          "padding-bottom": "25px",
          "fluid-on-mobile": "true", // true or false
        };
      },
    },
  },
  data() {
    return {
      mjml: {
        tagName: "mj-image",
        attributes: {},
      }
    };
  },
};
</script>

<style type="text/css">
@media only screen and (max-width: 480px) {
  table.mj-full-width-mobile {
    width: 100% !important;
  }
  td.mj-full-width-mobile {
    width: auto !important;
  }
}
</style>
