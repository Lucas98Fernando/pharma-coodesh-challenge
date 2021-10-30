<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
    :items-per-page="itemsPerPage"
    :footer-props="footerConfig"
    no-results-text="Nenhum resultado correspondente"
    sort-by="name"
    hide-default-footer
  >
    <template v-slot:top>
      <v-container>
        <v-row class="py-4" justify="center">
          <v-col cols="12" class="text-center">
            <h2>
              Lista de pacientes da
              <span class="teal--text">Pharma .Inc</span>
            </h2>
            <p class="text--secondary">
              Esse desafio proposto pela Coodesh foi desenvolvido com
              <v-icon small color="red">mdi-cards-heart</v-icon> por
              <a
                class="teal--text"
                href="https://github.com/Lucas98Fernando"
                target="_blank"
              >
                Lucas Fernando
              </a>
            </p>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="search"
              color="teal"
              append-icon="mdi-account-search-outline"
              label="Pesquisar"
              placeholder="Procurar por nome, gênero, etc..."
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card class="mx-auto" outlined>
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
                <v-icon small class="mr-1" color="teal">
                  mdi-email-outline
                </v-icon>
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
                <v-icon small class="mr-1" color="teal">
                  mdi-flag-outline
                </v-icon>
                {{ userInfo.country }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar size="80" color="grey">
              <img :src="userInfo.pictureMedium" alt="Profile Image" />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text @click="closeDialog()"> Fechar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="mr-3"
            v-bind="attrs"
            v-on="on"
            color="teal"
            @click="viewUserInfo(item)"
          >
            mdi-eye-outline
          </v-icon>
        </template>
        <span>Ver detalhes</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link
            :to="{
              path: '/user',
              query: item,
            }"
          >
            <v-icon v-bind="attrs" v-on="on" color="teal">mdi-link</v-icon>
          </router-link>
        </template>
        <span>Gerar link</span>
      </v-tooltip>
    </template>
    <template v-slot:no-data>
      <div class="py-4">Nenhum usuário encontrado</div>
      <img
        src="@/assets/images/not-found.png"
        alt="Nenhum dado encontrado"
        width="300px"
      />
    </template>
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
    itemsPerPage: {
      type: Number,
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
          value: "fullName",
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
      userInfo: {
        fullName: "",
        title: "",
        gender: "",
        birth: "",
        email: "",
        pictureMedium: "",
        phone: "",
        nationality: "",
        address: "",
        country: "",
        identification: "",
      },
    };
  },

  watch: {
    dialog(val) {
      val || this.closeDialog();
    },
  },

  computed: {
    // Método para colocar o ícone correspondente para o gênero masculino ou feminino de maneira dinâmica
    toggleGenderIcon(): string {
      return this.userInfo.gender === "Feminino" ? "female" : "male";
    },
  },

  methods: {
    viewUserInfo(item: IUserData) {
      // userInfo recebe tudo o que vem de item
      this.userInfo = Object.assign({}, item);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },
  },
});
</script>
