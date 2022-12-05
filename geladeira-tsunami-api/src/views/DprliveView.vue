<script>
import axios from "axios";
import { mapStores, mapState } from "pinia"
import { useAuthStore } from "../stores/auth"
export default {
  data() {
    return{
      dados: {},
      her: [],
      dprlive: {},
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
      while (e) {albums
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
      "https://api.spotify.com/v1/artists/0siBQaURCli5wn2lqv8WZg",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.dprlive = response.data;
    
    response = await axios.get(
      "https://api.spotify.com/v1/albums/1XtTygUdUqtwPyErnZxLbR?market=BR",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.her = response.data;
  }
}
</script>
<template>
  <h1>{{ her.name }}</h1>
  <p>
    {{ her.copyrights }}
    {{ her.label }}
  </p>
  <div>
    <p>
      {{ dprlive.name }}
      {{ dprlive.genres }}
      {{ dprlive.followers }}
    </p>
    <img :src="her.images[0].url" width="200" height="200">
  </div>
  <div v-for="item of her.tracks.items" :key="item.id">
    <h3>{{ item.name }}</h3>
    <audio controls>
      <source :src="item.preview_url" type="audio/mpeg" />
    </audio>
    <button @click="tocar(item)">Tocar</button>
  </div>
  <div v-if="musica">
    <h1>Música Completa</h1>
    <audio controls>
      <source :src="musica_mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>