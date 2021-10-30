<template>
  <div class="not-found">
    <div class="content">
      <v-container class="container-logo">
        <v-img src="@/assets/images/logo.png" width="50"></v-img>
      </v-container>
      <v-container>
        <v-row>
          <v-col align-self="center">
            <h1 class="teal--text">404</h1>
            <h2>Página não encontrada!</h2>
            <div class="subtitle-1 text--disabled">
              A página solicitada não existe
            </div>
            <v-btn color="teal" class="mt-3" dark to="/">
              <v-icon class="mr-2">mdi-arrow-left</v-icon>
              Voltar para o início
            </v-btn>
          </v-col>
          <v-col align-self="center">
            <img
              class="error-image"
              src="@/assets/images/not-found.png"
              width="500px"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageNotFound",
});
</script>

<style lang="scss" scoped>
.error-image {
  position: relative;
  animation: float 5s infinite ease-in-out;
  @keyframes float {
    0% {
      top: 0px;
    }
    25% {
      top: 10px;
      scale: 1.02;
    }
    50% {
      top: 0px;
    }
    75% {
      top: 10px;
      scale: 1.02;
    }
    100% {
      top: 0px;
    }
  }
}
</style>
