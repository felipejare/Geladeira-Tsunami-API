<script>
import axios from "axios";
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";
import CardArtista from "@/components/CardArtista.vue";
export default {
  data() {
    return {
      dados: {
        images: [
          {
            url: "",
          },
        ],
      },
      artistas: [],
      path_artistas: [
        {
          url: "https://api.spotify.com/v1/artists/6ab8tnQvr8sXXIpSZCrbQs",
          name: "/yunli",
        },
        {
          url: "https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER",
          name: "/nonly",
        },
        {
          url: "https://api.spotify.com/v1/artists/2o8gT0fQmFxGNbowbdgeZe",
          name: "/dprian",
        },
        {
          url: "https://api.spotify.com/v1/artists/0siBQaURCli5wn2lqv8WZg",
          name: "/dprlive",
        },
      ],
    };
  },
  components: { CardArtista },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["setToken"]),
    async getData() {
      let response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.dados = response.data;

      for (const item of this.path_artistas) {
        response = await axios.get(item.url, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.artistas.push({ url: item.name, ...response.data });
      }
    },
  },
  async created() {
    await this.getData();
  },
};
</script>
<template>
  <div class="container">
    <header>
      <h1>Spotify Dôs</h1>
      <RouterLink to="/perfil">
        <div class="perfil">
          <img :src="dados.images[0].url" width="50" height="50" />
          <h2>{{ dados.display_name }}</h2>
        </div>
      </RouterLink>
    </header>
    <div class="about">
      <div class="artistas">
        <CardArtista
          v-for="artista of artistas"
          :key="artista.id"
          :artista="artista"
        />
      </div>
    </div>
    <hr>
    <footer></footer>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(0, #19201e, #3d4e48);
}

header {
  color: white;
  background-color: #26312d;
  display: flex;
  padding: 20px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  padding-left: 50px;
  margin-top: 10px;
}

header a {
  text-decoration: none;
  color: white;
}
header a:hover {
  color: #2f413a;
}

.perfil {
  display: flex;
  background-color: #4d6360;
  border-radius: 50px;
  /* flex-direction: row; */
}
.perfil img {
  margin-right: 10px;
  padding: 2px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
.perfil h2 {
  margin-top: 10px;
  padding-right: 15px;
}

.artistas {
  display: flex;
  text-decoration: none;
}

</style>
