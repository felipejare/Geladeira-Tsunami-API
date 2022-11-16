<script>
import axios from "axios";
export default {
  data() {
    return {
      token: "",
      dados: {},
      albums: {},
      artista: {},
      toptrack: {},
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
                Authorization: `Bearer BQADYvgfjlQICS6xcwy1FzgQdHw02b0-TwyX9YwK2ixVQGtqrQY_rDTUdGzOyotcHo-6e7n7nwod_cObkWt2yS2-GZu0MHkwVeGce0FXspODrSS5PHeFeEjVsKN6pPIrgwRz41fLuVQcy_I2cT2YUMdqffanrnc1m5CuW9i-WuTn_ikvju7WrsKGWJ0_Q1pKco2lqVEGLqPZQakyng`
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
        <h2>{{ token }}</h2>
    </div>
    coisarada
    <div class="artista" >
        {{ artista.genres }}
        {{ artista.name }}
        {{ artista.followers }}
    </div>
    {{ albums.name }}
    {{ albums }}



</template>

<script></script>