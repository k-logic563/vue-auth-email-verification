<template>
  <div class="py-2 bg-primary">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end">
        <h1 class="text-white mb-0">Vue Auth Sample</h1>
        <button
          class="btn text-white"
          @click="logout"
          v-show="authStore.isLogin"
        >
          ログアウト
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import * as api from "@/api";
import * as store from "@/store";

export default defineComponent({
  setup() {
    const authStore = store.auth.useStore();

    return {
      authStore,
    };
  },
  methods: {
    logout() {
      api.auth.signOut().catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
      });
    },
  },
});
</script>
