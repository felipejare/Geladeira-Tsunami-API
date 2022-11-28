<script>
import axios from "axios";
import { mapStores, mapState } from "pinia"
import { useAuthStore } from "../stores/auth"
export default {
  data() {
    return{
      dados: {},
      albums: [],
      artista: {},
     };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['token'])
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
    async getPreviewUrl(preview) {
      const res = await axios.get(preview);
      console.log(res);
      return res.data;
    },
  },
  async created() {
    let response = await axios.get(
      "https://api.spotify.com/v1/artists/2o8gT0fQmFxGNbowbdgeZe",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.artista = response.data;
    
    response = await axios.get(
      "https://api.spotify.com/v1/albums/2hPHncbZRuWiCBauEUJxyA?market=BR",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.albums = response.data;
  }
}
</script>
<template>
  <h1>{{ albums.name }}</h1>
  <p>
    {{ albums.copyrights }}
    {{ albums.label }}
  </p>
  <p>
    {{ artista.name }}
    {{ artista.genres }}
    {{ artista.followers }}
  </p>
</template>