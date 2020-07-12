<template>
  <div
    class="mj-column-per-100 mj-outlook-group-fix mj-group"
    style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function() {
        return {
          width: "100%", // 這是 body width的設定, 所以每個 section 的數值都要一致。
          stack: true,
        };
      },
    },
  },
  data() {
    return {
      mjml: {
        tagName: "mj-group",
        attributes: {},
        children: [],
      },
    };
  },
};
</script>

<style>
@media only screen and (max-width: 480px) {
  table.mj-full-width-mobile {
    width: 100% !important;
  }
  td.mj-full-width-mobile {
    width: auto !important;
  }
}
</style>
