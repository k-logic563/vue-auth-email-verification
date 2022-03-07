<template>
  <form @submit.prevent="signin">
    <div class="mb-3">
      <label for="email" class="fw-bold form-label">メールアドレス</label>
      <input
        id="email"
        type="email"
        class="form-control"
        required
        v-model="email"
      />
    </div>
    <input type="submit" class="btn btn-primary" value="送信する" />
  </form>
</template>

<script>
import { ref, defineComponent } from "vue";

import * as api from "@/api";

export default defineComponent({
  setup() {
    const email = ref("");

    return {
      email,
    };
  },
  methods: {
    signin() {
      if (this.email) {
        api.auth
          .signInLinkToEmail(this.email)
          .then(() => {
            window.localStorage.setItem("emailForSignIn", this.email);
            this.$router.push("/confirm");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);
          });
      }
    },
  },
});
</script>
