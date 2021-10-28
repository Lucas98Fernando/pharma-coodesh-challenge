<template>
  <div>
    <TableUsers :users="getUsers" />
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
    };
  },

  async created() {
    await this.ActionGetUsers();
    this.users.results.forEach((user: IGetUserData) => {
      this.$data.getUsers.push({
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        birth: user.dob.date,
      });
    });
    console.log(this.users.results);
  },

  computed: {
    ...mapState("user", ["users"]),
  },

  methods: {
    ...mapActions("user", ["ActionGetUsers"]),
  },
});
</script>
