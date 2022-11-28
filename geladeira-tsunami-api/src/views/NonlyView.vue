<script>
import axios from "axios";
import { mapStores, mapState} from 'pinia'
import { useAuthStore } from "../stores/auth";

export default {
  data() {
    return {
      dados: {},
      staywithme: {},
      stepback: {},
      nonly: {},
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
      console.log(res);
      return res.data;
    },
    // não ta funcionando agora porem, vou mudar pra fazer funcionar
    // async tocar(item) {
    //   let response = await axios.get(item.href, {
    //     headers: {
    //       Authorization: `Bearer ${this.token}`,
    //     },
    //   });
    //   this.musica_mp3 = response.data;
    //   this.musica = item.preview_url;
    // },
  },
  async created() {
    // LER DO PINIA.. MAS ISSO PODE SER FEITO NO COMPUTED....
    // this.token = this.$route.query["access_token"];

    let response = await axios.get(
      "	https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.nonly = response.data;

    response = await axios.get(
      "https://api.spotify.com/v1/albums/5TPtlK0RBgPloK3Robfiyp",
      {
        headers: {
          Authorization: `Bearer ${this.token}  `,
        },
      }
    );
    this.staywithme = response.data;

    response = await axios.get(
        "https://api.spotify.com/v1/albums/5bgXspdu04zFxX5gq8uXMl",
        {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }
    );
    this.stepback = response.data

    // console.log(this.getHashParams());
  },
};
</script>
<template> 
  <div>
    <h1>{{ staywithme.name }}</h1>
  </div>
  <div>
    {{ staywithme.copyrights }}
    {{ staywithme.label }}
  </div>
  <div>
    {{ nonly.genres }}
    {{ nonly.name }}
    {{ nonly.followers }}
    <img :src="staywithme.images[0].url" width="200" height="200" />
    <br />
  </div>
  <div v-for="item of staywithme.tracks.items" :key="item.id">
    <h3>{{ item.name }}</h3>
    <audio controls>
      <source :src="item.preview_url" type="audio/mpeg" />

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
    </audio>
  </div>


  <hr>


  <div>
    <h1>{{ stepback.name }}</h1>
  </div>
  <div>
    {{ stepback.copyrights }}
    {{ stepback.label }}
  </div>
  <div>
    <img :src="stepback.images[0].url" width="200" height="200" />
    <br />
  </div>
  <div v-for="item of stepback.tracks.items" :key="item.id">
    <h3>{{ item.name }}</h3>
    <audio controls>
      <source :src="item.preview_url" type="audio/mpeg" />

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
    </audio>
  </div>



</template>