<template>
  <div id="nununi-editor">
    <div class="editor-modules">
      <draggable
        v-model="mjmlModules"
        :options="{forceFallback: true, group:{ name:'edm',  pull:'clone', put:false }, sort: false}"
        @start="drag=true"
        @end="drag=false"
        :clone="insertComponent"
      >
        <div v-for="module in mjmlModules" :key="module.id" class="mjml-module">{{module.name}}</div>
      </draggable>
    </div>
    <div class="editor-builder">
      <draggable
        v-model="activeElements"
        :options="builderOptions"
        @start="drag=true"
        @end="drag=false"
        class="dragArea editor-area"
        data-empty-template="Drag Elements from the Elements Bar into this area"
        :class="{empty: !activeElements.length}"
      >
        <component
          v-for="(element, index) in activeElements"
          :key="element.id"
          :id="element.id"
          :is="element.type"
          :settings="element.settings"
          :ref="`mj-${index}`"
          @delete="activeElements.splice(index, 1)"
          @click="handleClick(element.id)"
        />
      </draggable>
    </div>
    <div class="editor-setting">
      <component v-if="selectedElement" :is="`${selectedElement.type}Setting`"></component>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import OneButton from "./components/mjml-module/OneButton";
import TwoButton from "./components/mjml-module/TwoButton";
import OneButtonSetting from "./components/module-setting/OneButtonSetting";
import TwoButtonSetting from "./components/module-setting/TwoButtonSetting";

import { mapState, mapMutations, mapGetters } from "vuex";
import { SET_ACTIVE_ELEMENTS, SET_ACTIVE_ELEMENT_INDEX } from "./store/types";
export default {
  name: "App",
  components: {
    draggable,
    OneButton,
    TwoButton,
    OneButtonSetting,
    TwoButtonSetting
  },
  data() {
    return {
      builderOptions: {
        forceFallback: true,
        handle: "div.session",
        group: "edm",
        ghostClass: "element-ghost",
        chosenClass: "element-drop"
      },
      mjmlModules: [
        {
          id: "one-button",
          name: "一個按鈕",
          type: "OneButton",
          settings: {
            content: "example"
          }
        },
        {
          id: "two-button",
          name: "兩個按鈕",
          type: "TwoButton",
          settings: {
            content1: "button1",
            content2: "button2"
          }
        }
      ]
    };
  },
  computed: {
    ...mapState({
      builderElements: state => state.activeElements
    }),
    ...mapGetters({
      selectedElement: "getSelectedElement"
    }),
    activeElements: {
      get() {
        return this.builderElements;
      },
      set(val) {
        this.SET_ACTIVE_ELEMENTS(val);
      }
    }
  },
  methods: {
    ...mapMutations([SET_ACTIVE_ELEMENTS, SET_ACTIVE_ELEMENT_INDEX]),
    insertComponent(obj) {
      const newEl = JSON.parse(JSON.stringify(obj));
      newEl.id =
        Date.now() +
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
      return newEl;
    },
    handleClick(index) {
      this.SET_ACTIVE_ELEMENT_INDEX(index);
    }
  }
};
</script>

<style lang="scss" scoped>
#nununi-editor {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;

  .editor-modules,
  .editor-builder,
  .editor-setting {
    height: 100%;
    max-height: 100%;
    overflow: auto;
    flex: 1;
    border: 1px solid #000;
    padding: 40px 10px;
  }

  .dragArea {
    width: 100%;
    height: 100%;
  }

  .editor-area.empty {
    min-height: 500px;
    background: #cfcdcd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .editor-area.empty:after {
    content: attr(data-empty-template);
  }

  @media (max-width: 1366px) {
    .editor-area.empty {
      min-height: 400px;
    }
  }

  .element-ghost {
    border: 1px dashed #000;
  }

  .element-drop {
    cursor: grab;
  }
}
</style>
