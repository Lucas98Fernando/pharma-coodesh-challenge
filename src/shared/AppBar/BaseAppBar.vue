<template>
  <v-app-bar app color="teal" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/images/logo.png"
          transition="scale-transition"
          width="50"
        />
      </router-link>

      <v-toolbar-title class="font-weight-bold">Pharma. Inc</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down mr-3">Olá, seja bem-vindo!</div>

    <v-avatar>
      <img src="@/assets/images/lucas.jpg" alt="Lucas" />
    </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseAppBar",
});
</script>
