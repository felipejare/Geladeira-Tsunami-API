<script>
export default {
  props: ['artista']
}
</script>
<template>
  <div class="artista">
    <RouterLink :to="artista.url">
      <img :src="artista.images[0].url" width="350" height="350" />
      <h3>
        {{ artista.name }}
      </h3>
      <p>Seguidores: {{ artista.followers.total }}</p>
      <p>
        <span v-for="(genre, i) of artista.genres" :key="i">
          | {{ genre }} |
        </span>
      </p>
    </RouterLink>
  </div>
</template>

<style scoped>
.artista {
  background-color:rgba(0, 0, 0, 0.3);
  background: linear-gradient(1, #00000000, #000000);
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
</style>