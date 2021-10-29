<template>
  <v-app-bar app color="blue darken-1" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/images/logo.png"
        transition="scale-transition"
        width="50"
      />

      <v-toolbar-title class="font-weight-bold">Pharma. Inc</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <div class="mr-3">Olá, seja bem-vindo!</div>

    <v-avatar>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseAppBar",
});
</script>
