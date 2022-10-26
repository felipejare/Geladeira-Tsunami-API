<script>
import axios from 'axios'
export default {
  data() {
    return {
      token: "dddd",
      dados: {},
      albums: [],
      artista: {},
      artista2: {}
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

     let response = await  axios.get('https://api.spotify.com/v1/me', { headers: {
      Authorization: `Bearer ${this.token}`}
    })
    this.dados = response.data

    response = await axios.get('	https://api.spotify.com/v1/artists/6ab8tnQvr8sXXIpSZCrbQs', { headers: {
      Authorization: `Bearer ${this.token}`} 
    })
    this.artista = response.data

    response = await axios.get('	https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER', { headers: {
      Authorization: `Bearer ${this.token}`} 
    })
    this.artista2 = response.data
    // console.log(this.getHashParams());
  },
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ token }}</h2>
    <hr>
    {{ dados}}
    <hr>
    {{ dados.display_name}}
    <hr>
    {{ dados.id}}
    <hr>
    {{ artista.genres }}
    {{ artista.name }}
    {{ artista.followers }}
    <hr>
    {{ artista2.genres }}
    {{ artista2.name }}
    {{ artista2.followers }}

  </div>
</template>

<style></style>
