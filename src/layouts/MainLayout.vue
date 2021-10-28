<template>
  <v-app>
    <BaseAppBar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BaseAppBar from "@/shared/AppBar/BaseAppBar.vue";

export default Vue.extend({
  name: "MainLayout",
  components: {
    BaseAppBar,
  },
});
</script>
