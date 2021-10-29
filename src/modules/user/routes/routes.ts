export default [
  {
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: "/",
    name: "Home",
    meta: {
      title: "Lista de pacientes",
    },
    component: (): Promise<typeof import("*.vue")> =>
      import(/* webpackChunkName: "home" */ "@/modules/user/pages/Home.vue"),
  },
];
