<template>
  <div>
    <TableUsers :users="getUsers" :itemsPerPage="qtdResults" />
    <v-container class="d-flex justify-center align-center">
      <v-btn
        color="teal"
        class="mt-5"
        dark
        @click="loadMoreResults()"
        :loading="isLoading"
      >
        <v-icon class="mr-2">mdi-reload</v-icon>
        Carregar mais
      </v-btn>
    </v-container>
    <v-overlay :value="showOverlay">
      <v-progress-circular
        color="teal"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableUsers from "../components/TableUsers.vue";
import { IGetUserData } from "../interfaces/dto";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "Home",

  components: { TableUsers },

  data() {
    return {
      getUsers: [],
      isLoading: false,
      showOverlay: false,
      qtdResults: 5,
    };
  },

  async created() {
    this.loadMoreResults();
  },

  computed: {
    // Pegando o state users da store do Vuex
    ...mapState("user", ["users"]),
  },

  methods: {
    // Métodos vindos da store do Vuex
    ...mapActions("user", ["ActionGetUsers"]),
    async loadMoreResults() {
      // Utilizando o try and catch para realizar um tratamento, caso aconteça algo de errado na store ou no axios
      try {
        this.showOverlay = true;
        // this.getUsers = [];
        this.isLoading = true;
        let incrementResults = this.qtdResults;
        await this.ActionGetUsers(incrementResults);
        this.users.results.forEach((user: IGetUserData) => {
          // Atribuindo um new Date para poder formatar para o formato pt-br
          let birthFormated = new Date(user.dob.date);
          this.$data.getUsers.push({
            fullName: `${user.name.first} ${user.name.last}`,
            title: user.name.title,
            gender: user.gender === "female" ? "Feminino" : "Masculino",
            birth: birthFormated.toLocaleDateString("pt-br"),
            email: user.email,
            pictureMedium: user.picture.medium,
            phone: user.phone,
            nanationality: user.nat,
            address: `${user.location.street.name}, ${user.location.street.number} - ${user.location.city} `,
            country: user.location.country,
            identification: user.id.value
              ? user.id.value.trim()
              : "Não possui ID",
          });
        });
        incrementResults = this.qtdResults += 5;
        console.log(this.users.results);
      } catch (e) {
        this.$root.$emit("show-base-dialog", {
          titleMessage: "Ops... Deu ruim",
          bodyMessage: "Ocorreu um erro ao buscar as informções dos pacientes",
          colorText: "red",
        });
      } finally {
        this.isLoading = false;
        this.showOverlay = false;
      }
    },
  },
});
</script>
