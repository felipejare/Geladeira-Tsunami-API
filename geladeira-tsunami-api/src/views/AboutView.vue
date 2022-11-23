<script>
import axios from "axios";
import { mapStores, mapState, mapActions} from 'pinia'
import { useAuthStore } from "../stores/auth";
export default {
  data() {
    return {
      dados: {},
      albums: [],
      artista: {},
      artista2: {},
      artista3: {},
      artista4: {},
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ['token'])
  },
  methods: {
    ...mapActions(useAuthStore, ['setToken']),
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
  
    this.setToken(this.$route.query["access_token"])
    
    console.log(this.token)

    let response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    this.dados = response.data;

    response = await axios.get(
      "	https://api.spotify.com/v1/artists/6ab8tnQvr8sXXIpSZCrbQs",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.artista = response.data;

    response = await axios.get(
      "	https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.artista2 = response.data;

    response = await axios.get(
      "https://api.spotify.com/v1/artists/2o8gT0fQmFxGNbowbdgeZe",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Host: "api.spotify.com",
        },
      }
    );
    this.artista3 = response.data;

    response = await axios.get(
      "https://api.spotify.com/v1/artists/0siBQaURCli5wn2lqv8WZg",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Host: "api.spotify.com",
        },
      }
    );
    this.artista4 = response.data;
    // console.log(this.getHashParams());
  },
};
</script>
BQBMncPKqXAC1osnPCfFJBOIsK9PmwutW2K_QFaX_B75vgz_xBpXA3hAeCoqZHlwEZ0Yrk9UGRd0QIIJhXvbWYzHF9l0kL1YYKfVBwC-vCuOizS_UWGoYXpafFn8gJhOlVj7LNtaDvIp4Tao4a0lVSXtFFnudJZB3-fub7lyU4NCHaRoUa69jCw9j7ZDzed6Wz513UgNSlXHBOeUKIsL_g
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ token }}</h2>
    <hr />
    {{ dados }}
    <hr />
    {{ dados.display_name }}
    <hr />
    {{ dados.id }}
    <hr />
    <div class="artista">
      <RouterLink to="/yunli">
        <img class="artimg" src="public/yunli.jpg" alt="" />
        {{ artista.genres }}
        {{ artista.name }}
        {{ artista.followers }}
      </RouterLink>
    </div>
    <hr />
    <div class="artista">
      <RouterLink to="/nonly">
        <img class="artimg" src="public/download.jpeg" alt="" />
        {{ artista2.genres }}
        {{ artista2.name }}
        {{ artista2.followers }}
        <button class="circulo">E</button>
      </RouterLink>
    </div>
    <hr />
    <div class="artista">
      <RouterLink to="/dprian">
        <img class="artimg" src="public/dprian.jpeg" alt="" />
        {{ artista3.name }}
        {{ artista3.followers }}
        {{ artista3.genres }}
      </RouterLink>
    </div>
    <hr />
    <div class="artista">
      <RouterLink to="/dprlive">
        <img src="public/dprlive.jpeg" alt="" class="artimg" />
        {{ artista4.name }}
        {{ artista4.followers }}
        {{ artista4.genres }}
      </RouterLink>
    </div>
  </div>
</template>

<style>
.artista {
  background-color: green;
  color: white;
  width: 130px;
  height: 250px;
}
.artimg {
  max-width: 100px;
  margin: 10px 10px 10px 10px;
}

.circulo {
  background: lightblue;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
</style>
