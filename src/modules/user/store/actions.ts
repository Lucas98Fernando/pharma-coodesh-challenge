import { ActionTree } from "vuex";
import { StateInterface } from "@/store/index";
import { IUserState } from "./state";
import apiService from "@/services/api";

const actions: ActionTree<IUserState, StateInterface> = {
  async ActionGetUsers({ commit }, qtdResults) {
    return await apiService
      .get(`/api/?results=${qtdResults}`)
      .then((respUsers) => commit("USER/GET_USER", respUsers.data));
  },
};

export default actions;
