<script>
import axios from 'axios'
export default {
  data() {
    return {
      token: "dddd",
      dados: {},
      albums: []
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
    const { data } = await  axios.get('https://api.spotify.com/v1/me', { headers: {
      Authorization: `Bearer ${this.token}`}
    })
    this.dados = data

    const res = await axios.get('https://api.spotify.com/v1/browse/categories', { 
      headers: {
        Authorization: `Bearer ${this.token}`,
        Host: 'api.spotify.com'
      }
    })
    this.albums = res.data
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
    {{ albums }}
  </div>
</template>

<style></style>
