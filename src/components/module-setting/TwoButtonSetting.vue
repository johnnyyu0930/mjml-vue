<template>
  <div>
    <section>
      <label for="oneButtonText">文字1</label>
      <input type="text" id="twoButtonText1" v-model="content1" />
    </section>
    <section>
      <label for="oneButtonText">文字2</label>
      <input type="text" id="twoButtonText2" v-model="content2" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { SET_ACTIVE_ELEMENT } from "../../store/types";
export default {
  computed: {
    ...mapGetters({
      selecetedElement: "getSelectedElement"
    }),
    content1: {
      get() {
        return this.selecetedElement.settings.content1;
      },
      set(val) {
        this.SET_ACTIVE_ELEMENT({
          content1: val
        });
      }
    },
    content2: {
      get() {
        return this.selecetedElement.settings.content2;
      },
      set(val) {
        this.SET_ACTIVE_ELEMENT({
          content2: val
        });
      }
    }
  },
  methods: {
    ...mapMutations([SET_ACTIVE_ELEMENT])
  }
};
</script>

<style>
</style>