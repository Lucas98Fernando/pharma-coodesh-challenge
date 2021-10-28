import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
  ["USER/GET_USER"](state: IUserState, payload) {
    state.users = payload;
  },
};

export default mutations;
