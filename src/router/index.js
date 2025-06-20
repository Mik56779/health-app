import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/HomeView.vue");
const About = () => import("../views/AboutView.vue");
const Login = () => import("../views/LoginView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "begin",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "home",
      children: [
        { path: "", component: Home },
        // {path: "phamacy", component: home},
        // {path: 'service', component: home},
        // {path: 'mobile', component: home},
        // {path:'xcare', component: home},
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
  ],
});

export default router;
