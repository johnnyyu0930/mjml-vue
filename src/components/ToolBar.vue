<template>
  <Fragment>
    <span class="toolbar-line toolbar-line-top"></span>
    <span class="toolbar-line toolbar-line-right"></span>
    <span class="toolbar-line toolbar-line-bottom"></span>
    <span class="toolbar-line toolbar-line-left"></span>
    <div class="toolbar-tool-layout">
      <div class="order-tool">
        <button>拖曳</button>
        <button>向上</button>
        <button>向下</button>
      </div>
      <div class="editor-tool">
        <button>編輯</button>
        <button>複製</button>
        <button @click="$emit('delete')">刪除</button>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment
  }
};
</script>

<style lang="scss" scoped>

.toolbar-line {
  position: absolute;
  background-color: #2ba464;

  &-top {
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
  }

  &-right {
    top: 0;
    bottom: 0;
    right: 0;
    width: 2px;
  }

  &-bottom {
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
  }

  &-left {
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
  }
}

.toolbar-tool-layout {
  position: absolute;
  width: 100%;
  height: 36px;
  top: -18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>