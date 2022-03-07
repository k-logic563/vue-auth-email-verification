import { defineStore } from "pinia";

import { User } from "firebase/auth";

export const useStore = defineStore("authStore", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isLogin: (s) => s.user,
  },
});
