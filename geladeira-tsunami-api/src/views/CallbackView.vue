<script>
import { mapStores, mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    ...mapActions(useAuthStore, ["setToken"]),    
  },
  async created() {
    this.setToken(this.$route.query["access_token"]);
    this.$router.push('/main')
  }
}
</script>
<template>
  <h1>Redirecionando....</h1>
</template>