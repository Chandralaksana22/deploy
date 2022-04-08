import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import listBeranda from "./listBeranda";


Vue.use(Vuex);
const persistedstate = createPersistedState({
    paths: ["listBeranda"],
})

export default new Vuex.Store({
    plugins: [persistedstate],
    modules: {
        listBeranda :{
           namespaced: true,
           ...listBeranda,
       },
    },
});
