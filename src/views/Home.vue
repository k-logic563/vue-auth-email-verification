<template>
  <section>
    <h1>Home</h1>
    <p>Your Email: {{ authStore.user?.email }}</p>
  </section>
</template>

<script>
import { defineComponent } from "vue";

import * as store from "@/store";

export default defineComponent({
  setup() {
    const authStore = store.auth.useStore();

    return {
      authStore,
    };
  },
});
</script>
