<script>
import axios from "axios";
import { mapStores, mapState } from "pinia"
import { useAuthStore } from "../stores/auth"
export default {
  data() {
    return{
      dados: {      images: [
          {
            url: "",
          },
        ],},
      moodswingsinthisorder: [],
      dprian: {},
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
  },
  async created() {
    let response = await axios.get(
      "https://api.spotify.com/v1/artists/2o8gT0fQmFxGNbowbdgeZe",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.dprian = response.data;
    
    response = await axios.get(
      "https://api.spotify.com/v1/albums/2hPHncbZRuWiCBauEUJxyA?market=BR",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.moodswingsinthisorder = response.data;
  }
}
</script>
<template>
    <div class="container ">
    <div class="topo">
      <a href="http://localhost:5173/main" class="backbutton"></a>
      <img :src="moodswingsinthisorder.images[0].url" width="200" height="200" />
      <div class="texttopo">
        <h5>Album</h5>
        <h1>{{ moodswingsinthisorder.name }}</h1>
      </div> 
      <div class="artcard">
        <img :src="dprian.images[0].url" width="350" height="350" class="imgart" />
        <p class="titulo">
          {{ dprian.name }}
        </p>
      </div>  
    </div>
    <div class="blocoprincipal">
      <div class="informations">  
        <button class="button-78" role="button">P</button>
        <div class="heart"></div>
        <div class="musicas">
          <div v-for="item of moodswingsinthisorder.tracks.items" :key="item.id">
            <h3>{{ item.name }}</h3>
            <audio controls>
              <source :src="item.preview_url" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>  
    </div>  
  </div>
</template>

<style scoped>

.musicas {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
}


.container{
  color: #FFFFFF;
  background: linear-gradient(0, #000000, rgb(182, 182, 182));
  height: 100vh;
}

.blocoprincipal{
  background: linear-gradient(1, #00000000, #000000);
  background-color:rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin: auto;
  width: 100%;
  height: 65%;
  padding: 10px;
  padding-left: 400px;
  
}

.informations{
  padding-top: 30px;
  padding-left: 30px;
  margin: auto;


}

.topo{
  margin: auto;
  width: 80%;
  padding: 10px;
  display: flex;
  height: 300px;
}

.topo h1{
  
  font-size: 80px;
}

.texttopo{
    margin: auto;
}

img {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin-left: 20px;
    
}

/* CSS */
.button-78 {
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01,sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 25px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 25px;
  word-break: keep-all;
  z-index: 0;
}

@media (min-width: 768px) {
  .button-78 {
    padding: 19px 32px;
  }
}

.button-78:before,
.button-78:after {
  border-radius: 50%;
}

.button-78:before {
  background-image: linear-gradient(92.83deg, #57e9b1 0, #66f3a1 100%);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-78:after {
  background-color: initial;
  background-image: linear-gradient(#183d31 0, #0c0d0d 100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-78:hover:not(:disabled):before {
  background: linear-gradient(92.83deg, rgb(38, 255, 154) 0%, rgb(78, 211, 189) 100%);
}

.button-78:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
  opacity: 0;
}

.button-78:active:not(:disabled) {
  color: #ccc;
}

.button-78:active:not(:disabled):before {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #0efc8d 0, #41a083 100%);
}

.button-78:active:not(:disabled):after {
  background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-78:disabled {
  cursor: default;
  opacity: .24;
}

.heart {
  background-color: rgb(54, 114, 81);
  display: inline-block;
  height: 30px;
  margin: 0 30px;
  position: relative;
  top: 13px;
  transform: rotate(-45deg);
  width: 30px;
  
}

.heart:before,
.heart:after {
  content: "";
  background-color: rgb(54, 114, 81);
  border-radius: 50%;
  height: 30px;
  position: absolute;
  width: 30px;
}

.heart:before {
  top: -15px;
  left: 0;
}

.heart:after {
  left: 15px;
  top: 0;
}

.backbutton {
  background-color: #898c97;
  color: black;
  margin: 10px;
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-radius: 100px;
}
.backbutton::after {
  color: black;
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  transform: rotate(45deg);
  left: 10px;
  top: 8px;
}
.backbutton:hover {
  background-color: #6b6d75;
}

.artcard{
  background-color: black;
  height: 40px;
  width: 120px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  padding-left: 10px;
}

.artcard :hover{
  background-color: #0efc8d;
}

.imgart{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}



</style>