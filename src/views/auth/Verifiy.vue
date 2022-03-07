<template>
  <div class="text-center">認証中です...</div>
</template>

<script>
import * as api from "@/api";

export default {
  async created() {
    if (api.auth.isCheckSignInWithEmailLink(window.location.href)) {
      const storageEmail = window.localStorage.getItem("emailForSignIn");

      await api.auth
        .signIn(storageEmail, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
        });
      return;
    }
  },
};
</script>
