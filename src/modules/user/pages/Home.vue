<template>
  <TableUsers :users="getUsers" />
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
    };
  },

  async created() {
    // Utilizando o try and catch para realizar um tratamento, caso aconteça algo de errado na store ou no axios
    try {
      await this.ActionGetUsers();
      this.users.results.forEach((user: IGetUserData) => {
        this.$data.getUsers.push({
          fullName: `${user.name.first} ${user.name.last}`,
          title: user.name.title,
          gender: user.gender === "female" ? "Feminino" : "Masculino",
          birth: user.dob.date,
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
      console.log(this.users.results);
    } catch (e) {
      this.$root.$emit("show-base-dialog", {
        titleMessage: "Ops... Deu ruim",
        bodyMessage: "Ocorreu um erro ao buscar as informções dos pacientes",
        colorText: "red",
      });
    }
  },

  computed: {
    // Pegando o state users da store do Vuex
    ...mapState("user", ["users"]),
  },

  methods: {
    // Métodos vindos da store do Vuex
    ...mapActions("user", ["ActionGetUsers"]),
  },
});
</script>
