import { Module } from "vuex";
import { StateInterface } from "@/store";
import state, { IUserState } from "./state";
import actions from "./actions";
import mutations from "./mutations";

const userModule: Module<IUserState, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default userModule;
