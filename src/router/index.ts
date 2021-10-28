import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { default as userRoutes } from "@/modules/user/routes/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "MainLayout",
    path: "/",
    component: (): Promise<typeof import("*.vue")> =>
      import(/* webpackChunkName: "main-layout" */ "@/layouts/MainLayout.vue"),
    children: [...userRoutes],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Títulos personalizados para cada página
router.beforeEach((to, from, next) => {
  document.title = `Pharma - ${to.meta?.title}`;
  next();
});

export default router;
