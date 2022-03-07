import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Verify from "@/views/auth/Verifiy.vue";
import Entry from "@/views/auth/Entry.vue";
import Confirm from "@/views/auth/Confirm.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/verify",
      name: "verify",
      component: Verify,
    },
    {
      path: "/entry",
      name: "entry",
      component: Entry,
    },
    {
      path: "/confirm",
      name: "confirm",
      component: Confirm,
    },
  ],
});
