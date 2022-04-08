import Vue from "vue";
import VuerRouter from "vue-router";
import Vuetify from "vuetify/lib";
import Beranda from "@/views/HomeView.vue";

Vue.use(Vuetify)

Vue.use(VuerRouter);

const routes = [
  {
    path: "/",
    name: "",
    component : Beranda,
  },
];
const router = new VuerRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;