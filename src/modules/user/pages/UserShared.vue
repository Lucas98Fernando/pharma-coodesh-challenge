<template>
  <v-card class="mx-4 py-2" outlined elevation="2" rounded="xl">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="mb-4">{{ userInfo.title }}.</div>
        <v-list-item-title class="text-h5 mb-2">
          {{ userInfo.fullName }}
        </v-list-item-title>

        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal">
            mdi-card-account-details-outline
          </v-icon>
          {{ userInfo.identification }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal"> mdi-email-outline </v-icon>
          {{ userInfo.email }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal">
            mdi-gender-{{ toggleGenderIcon }}
          </v-icon>
          {{ userInfo.gender }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal">
            mdi-cake-variant-outline
          </v-icon>
          {{ userInfo.birth }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal">mdi-cellphone</v-icon>
          {{ userInfo.phone }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal">
            mdi-map-marker-outline
          </v-icon>
          {{ userInfo.address }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon small class="mr-1" color="teal"> mdi-flag-outline </v-icon>
          {{ userInfo.country }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="80" color="grey">
        <img :src="userInfo.pictureMedium" alt="Profile Image" />
      </v-list-item-avatar>
    </v-list-item>

    <v-btn to="/" color="teal" class="my-3 ml-3" dark>
      <v-icon class="mr-2">mdi-arrow-left</v-icon>
      Lista de pacientes
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "UserShared",

  data() {
    return {
      userInfo: this.$route.query,
    };
  },

  computed: {
    toggleGenderIcon(): string {
      return this.userInfo.gender === "Feminino" ? "female" : "male";
    },
  },
});
</script>
