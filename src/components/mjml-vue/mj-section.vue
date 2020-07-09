<template>
  <div
    class="mj-section"
    style="margin:0px auto"
    :style="{ 'max-width': settings.width }"
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="width:100%;"
    >
      <tbody>
        <tr>
          <td
            style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
          >
            <slot></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-section",
        attributes: {},
        children: [],
      },
      settings: {
        width: "100%", // 這是 body width的設定, 所以每個 section 的數值都要一致。
      },
    };
  },
};
</script>

<style></style>
