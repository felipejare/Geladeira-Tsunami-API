<script>
import axios from "axios";
import { mapStores, mapState } from "pinia"
import { useAuthStore } from "../stores/auth"
export default {
    data() {
    return{
      dados: {
        images:[
          {
            url: ""
          }
        ]
      },
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
  },
  async created (){
    console.log(this.token);
    let response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    this.dados = response.data;
  }
}
</script>

<template>
    <img :src="dados.images[0].url" width="300" height="300">
    <h1>{{ dados.display_name }}</h1>
    <p>{{ dados.email }}</p>
    <p>{{ dados.product }}</p>
    <hr>
    <p>{{ token }}</p> 
</template>
