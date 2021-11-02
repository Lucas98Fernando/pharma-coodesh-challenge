<template>
  <v-sheet v-if="isVisible" class="base-loading">
    <div></div>
    <div class="progress-middle">
      <img src="../../assets/gifs/heart.gif" alt="Heart" />
      <v-progress-linear
        class="mt-2"
        indeterminate
        color="teal"
      ></v-progress-linear>
    </div>
    <div>
      <h3>Pharma .Inc</h3>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseLoading",

  data() {
    return {
      isVisible: false,
    };
  },

  created() {
    this.$root.$on("show-base-loading", () => {
      this.isVisible = true;
    });
    this.$root.$on("hide-base-loading", () => {
      this.isVisible = false;
    });
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/flex-center";
.base-loading {
  display: grid;
  place-items: center;
  // @include flex-center(true);
  // justify-content: space-between;
  position: absolute;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 999;
  margin: 0 auto;
  // padding: 1rem;
  .progress-middle {
    @include flex-center(true);
    img {
      margin: 0 0 1rem;
      width: 120px;
    }
  }
}
</style>
