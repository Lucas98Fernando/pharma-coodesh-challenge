<template>
  <v-app>
    <BaseLoading />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BaseLoading from "@/shared/Loading/BaseLoading.vue";

export default Vue.extend({
  name: "App",

  components: {
    BaseLoading,
  },

  mounted() {
    // Emite o evento para exibir o loading padrão da aplicação
    this.$root.$emit("show-base-loading");
    // Verifica se a página carregou completamente, se sim, o loading será oculto
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.hideLoading();
      }
    };
  },
  methods: {
    hideLoading() {
      this.$root.$emit("hide-base-loading");
    },
  },
});
</script>
