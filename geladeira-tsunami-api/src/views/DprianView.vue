<script>
import axios from "axios";
export default {
    data() {
        return{
            token: "",
            dados: {},
            album: [],
        };
    },
    methods: {
    getHashParams() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = this.token;
      e = r.exec(q);
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      return hashParams;
    },
  },
async created() {
    this.token = this.$route.query["access_token"];

    let response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    this.dados = response.data;

    response = await axios.get("https://api.spotify.com/v1/albums/2hPHncbZRuWiCBauEUJxyA?market=BR", {
        headers: {
            Authorization: `Bearer ${this.token}`,
        },
    });
    this.album = response.album;
}
}

</script>
<template>
    <h2>{{ dados }}</h2>
    <h1>{{ album }}</h1>
    
</template>