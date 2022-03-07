<template>
  <div>
    <Header />
    <div class="container py-5">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onAuthStateChanged } from "firebase/auth";

import Header from "@/components/Header.vue";

import * as store from "@/store";
import * as api from "@/api";

export default defineComponent({
  components: {
    Header,
  },
  async created() {
    const authStore = store.auth.useStore();
    onAuthStateChanged(api.auth.auth, (user) => {
      if (user) {
        authStore.user = user;
        this.$router.push("/");
        return;
      }
      authStore.user = null;
      this.$router.push("/entry");
    });
  },
});
</script>
