<script>
import axios from "axios";
export default {
    data() {
        return{
            token: "",
            dados: {},
            album: [],
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

}

</script>
<template>
</template>