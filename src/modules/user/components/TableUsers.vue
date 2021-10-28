<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
    sort-by="name"
    :footer-props="footerConfig"
  >
    <template v-slot:top>
      <v-container>
        <v-row class="py-4" justify="center">
          <v-col cols="12" class="text-center">
            <div class="subtitle-1 font-weight-bold">
              Lista de usuários da Pharma .Inc
            </div>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="search"
              append-icon="mdi-account-search-outline"
              label="Pesquisar"
              placeholder="Procurar por..."
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">OVERLINE</div>
              <v-list-item-title class="text-h5 mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close()"> Fechar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="mr-2"
            v-bind="attrs"
            v-on="on"
            color="blue darken-1"
            @click="viewUserInfo(item)"
          >
            mdi-eye-outline
          </v-icon>
        </template>
        <span>Ver detalhes</span>
      </v-tooltip>
    </template>
    <template v-slot:no-data> Nenhum usuário encontrado </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { IUserData } from "../interfaces/dto";

export default Vue.extend({
  name: "TableUsers",

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
      search: "",
      headers: [
        {
          text: "Nome",
          align: "start",
          value: "name",
        },
        {
          text: "Gênero",
          value: "gender",
        },
        {
          text: "Nascimento",
          value: "birth",
        },
        {
          text: "Ações",
          value: "actions",
          sortable: false,
        },
      ],
      footerConfig: {
        itemsPerPageText: "Resultados por página",
      },
      editedIndex: -1,
      userInfo: {
        name: "",
        gender: "",
        birth: "",
      },
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    viewUserInfo(item: IUserData) {
      this.editedIndex = this.users.indexOf(item);
      this.userInfo = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },
  },
});
</script>
