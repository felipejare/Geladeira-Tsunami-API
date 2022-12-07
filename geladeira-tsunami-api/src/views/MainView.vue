<script>
import axios from "axios";
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  data() {
    return {
      dados: {},
      yunli: {
        followers: {
          total: 0,
        },
        genres: [],
        images: [
          {
            url: "",
          },
        ],
      },
      nonly: {
        followers: {
          total: 0,
        },
        genres: [],
        images: [
          {
            url: "",
          },
        ],
      },
      dprian: {
        followers: {
          total: 0,
        },
        genres: [],
        images: [
          {
            url: "",
          },
        ],
      },
      dprlive: {
        followers: {
          total: 0,
        },
        genres: [],
        images: [
          {
            url: "",
          },
        ],
      },
    };
  },
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

      response = await axios.get(
        "	https://api.spotify.com/v1/artists/6ab8tnQvr8sXXIpSZCrbQs",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      this.yunli = response.data;

      response = await axios.get(
        "	https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      this.nonly = response.data;

      response = await axios.get(
        "https://api.spotify.com/v1/artists/2o8gT0fQmFxGNbowbdgeZe",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            Host: "api.spotify.com",
          },
        }
      );
      this.dprian = response.data;

      response = await axios.get(
        "https://api.spotify.com/v1/artists/0siBQaURCli5wn2lqv8WZg",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            Host: "api.spotify.com",
          },
        }
      );
      this.dprlive = response.data;
      // console.log(this.getHashParams());
    },
  },
  async created() {
    await this.getData();
  },
  // async onUpdated() {
  //   await this.getData()

  // }
};
</script>
<template>
  <header>
    <h1>TSIDGE</h1>
    <RouterLink to="/perfil">
      <h2>{{ dados.display_name }} ==</h2>
    </RouterLink>
  </header>
  <div class="about">
    <div class="artistas">
      <div class="artista">
        <RouterLink to="/yunli">
          <img :src="yunli.images[0].url" width="350" height="350" />
          {{ yunli.name }}
          {{ yunli.genres }}
          {{ yunli.followers }}
        </RouterLink>
      </div>
      <div class="artista">
        <RouterLink to="/nonly">
          <img :src="nonly.images[0].url" width="350" height="350" />
          {{ nonly.name }}
          {{ nonly.genres }}
          {{ nonly.followers }}
        </RouterLink>
      </div>
      <div class="artista">
        <RouterLink to="/dprian">
          <img :src="dprian.images[0].url" width="350" height="350" />
          {{ dprian.name }}
          {{ dprian.followers }}
          {{ dprian.genres }}
        </RouterLink>
      </div>
      <div class="artista">
        <RouterLink to="/dprlive">
          <img :src="dprlive.images[0].url" width="350" height="350" />
          <h3>
            {{ dprlive.name }}
          </h3>
          <p>Seguidores: {{ dprlive.followers.total }}</p>
          <p>
            <span v-for="(genre, i) of dprlive.genres" :key="i">
              | {{ genre }} |
            </span>
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
  <hr />
  <footer></footer>
</template>

<style>
body {
  background-color: #384842;
  color: white;
}

header {
  background-color: #2f413a;
  display: flex;
  padding: 20px;
}

h1 {
  padding-left: 50px;
  padding-right: 1000px;
}

h2 {
  padding-left: 620px;
  padding-right: 50px;
}

header a {
  text-decoration: none;
  color: white;
}

header a:hover {
  color: #4d6360;
}

.artistas {
  display: flex;
  text-decoration: none;
}

.artista {
  background-color: #4d6360;
  color: white;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
}

.artista :hover {
  box-shadow: black;
}

.artista img {
  margin: 25px 25px 5px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
}

.artista h3 {
  margin-left: 30px;
}

.artista p {
  margin-left: 30px;
  color: #a1aca8;
}

.artista a {
  text-decoration: none;
  color: white;
  font-size: larger;
}

.artimg {
  max-width: 200px;
  margin: 10px 10px 10px 10px;
}
</style>
