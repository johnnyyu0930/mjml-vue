<template>
  <div
    class="mj-column-per-100 mj-outlook-group-fix mj-group"
    style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;"
  >
    <slot :stack="stack"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-group",
        attributes: {},
        children: [],
      },
      settings: {
        width: "100%", // 這是 body width的設定, 所以每個 section 的數值都要一致。
        stack: true
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
