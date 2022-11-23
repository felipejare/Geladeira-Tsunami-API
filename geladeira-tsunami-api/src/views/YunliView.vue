<script>
import axios from "axios";
import { mapStores, mapState} from 'pinia'
import { useAuthStore } from "../stores/auth";

export default {
  data() {
    return {
      dados: {},
      albums: {},
      artista: {},
      toptrack: {},
      musica: "",
      musica_mp3: "",
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
      console.log("oioioi");
      console.log(res);
      return res.data;
    },
    async tocar(item) {
      let response = await axios.get(item.href, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.musica_mp3 = response.data;
      this.musica = item.preview_url;
    },
  },
  async created() {
    // LER DO PINIA.. MAS ISSO PODE SER FEITO NO COMPUTED....
    // this.token = this.$route.query["access_token"];

    let response = await axios.get(
      "	https://api.spotify.com/v1/artists/6ab8tnQvr8sXXIpSZCrbQs",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.artista = response.data;

    response = await axios.get(
      "https://api.spotify.com/v1/albums/0eX2yFKyUIbC4dhi7Q8jPU",
      {
        headers: {
          Authorization: `Bearer ${this.token}  `,
        },
      }
    );
    this.albums = response.data;

    // console.log(this.getHashParams());
  },
};
</script>

<template>
  <div>
    <h1>{{ albums.name }}</h1>
  </div>
  <div>
    {{ artista.genres }}
    {{ artista.name }}
    {{ artista.followers }}
    <img :src="albums.images[0].url" width="200" height="200" />
    <br />
  </div>
  <div v-for="item of albums.tracks.items" :key="item.id">
    <h3>{{ item.name }}</h3>
    <audio controls>
      <source :src="item.preview_url" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <button @click="tocar(item)">Tocar</button>
  </div>
  <!-- <div v-for="item of albums.tracks.items" :key="item.id">
        <audio controls>
          <source :src="item.uri" type="audio/mpeg">
        </audio>

      </div> -->
  <!-- {{ albumtrack }} -->

  <div v-if="musica">
    <h1>Musica completa</h1>
    <audio controls>
      <source :src="musica_mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script></script>
