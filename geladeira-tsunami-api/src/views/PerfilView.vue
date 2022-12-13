<script>
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "../stores/auth";
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
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["token"]),
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
    console.log(this.token);
    let response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    this.dados = response.data;
  },
};
</script>

<template>
  <div class="container">
    <header>
      <a href="http://localhost:5173/main"><button>Voltar</button></a>
        <img :src="dados.images[0].url" />
        <h1>{{ dados.display_name }}</h1>
    </header>
    <main>
      <p>{{ dados.product }}</p>
      <p>{{ dados.email }}</p>
    </main>
    <footer>
      <p>{{ token }}</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background: linear-gradient(0, #1c2421, #324b42);
  display: flex;
  height: 650px;
}
header img {
  height: 550px;
  width: 550px;
  margin-top: 50px;
  margin-left: 200px;
  border-radius: 50%;
  border: 2px solid #3f9c7a;
  filter: drop-shadow(0 0 10px rgb(44, 122, 83));
}
button {
  background-color: #446e5f;
  border: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
button:hover {
  background-color: #a8e2ce;
}

h1 {
  font-size: 100px;
  margin-left: 50px;
  margin-top: 250px;
}
p {
  font-size: 20px;
}
main {
  height: 300px;
}

footer {
  background-color: #384842;
}
footer p {
  font-size: 10px;
  text-align: center;
}
.container {
  background: linear-gradient(0, #26312d, #384842);
  color: white;
}
</style>
