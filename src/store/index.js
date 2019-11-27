import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn : false,
    layout   : 'auth-layout'
  },
  getters: {
    signedIn : state => {
      return state.signedIn;
    },
    layout: (state) => {
        return state.layout;
    }
  },
  mutations: {
    SIGN_IN : state => {
      state.signedIn = true;
    },
    SIGN_OUT : state => {
        state.signedIn = false;
    },
    SET_LAYOUT (state, payload) {
        state.layout = payload;
    }
  },
  actions: {
    signIn : context => {
      context.commit("SIGN_IN");
    },
    signOut : context => {
        context.commit("SIGN_OUT");
    },
    setLayout : (context, layout) =>  {
        context.commit("SET_LAYOUT", layout);
    }
  },
  modules: {
  }
})
