import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "@/modules/user/store";
import { IUserState } from "@/modules/user/store/state";

export interface StateInterface {
  user: IUserState;
}

export default new Vuex.Store({
  modules: {
    user,
  },
});
