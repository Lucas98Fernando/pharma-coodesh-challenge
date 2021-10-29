<template>
  <v-dialog
    v-model="showDialog"
    transition="dialog-top-transition"
    persistent
    max-width="400"
  >
    <v-card rounded="xl">
      <v-card-text class="text-center">
        <img :src="`${srcImg}`" alt="" width="100%" />
        <h1 class="my-3" :class="`${colorText}--text`">
          {{ titleMessage }}
        </h1>
        {{ bodyMessage }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="showDialog = false"> Fechar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

interface IDialogOptions {
  srcImg: string;
  titleMessage: string;
  colorText: string;
  bodyMessage: string;
}

export default Vue.extend({
  name: "BaseDialog",

  data() {
    return {
      showDialog: false,
      srcImg: "",
      titleMessage: "",
      colorText: "",
      bodyMessage: "",
    };
  },

  created() {
    // Possibilitando passar um payload com as opções de forma dinâmica em cada chamada do componente
    this.$root.$on("show-base-dialog", (options: IDialogOptions) => {
      this.showDialog = true;
      this.srcImg = options.srcImg;
      this.titleMessage = options.titleMessage;
      this.colorText = options.colorText;
      this.bodyMessage = options.bodyMessage;
    });
  },
});
</script>
