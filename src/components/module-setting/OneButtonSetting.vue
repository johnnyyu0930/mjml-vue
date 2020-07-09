<template>
  <div>
    <section>
      <label for="oneButtonText">文字</label>
      <input type="text" id="oneButtonText" v-model="content" />
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
    content: {
      get() {
        return this.selecetedElement.settings.content;
      },
      set(val) {
        this.SET_ACTIVE_ELEMENT({
          content: val
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