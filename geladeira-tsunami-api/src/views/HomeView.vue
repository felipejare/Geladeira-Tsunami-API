<script setup>

</script>

<template>
  <header>
    <h1>Bem vindos ao TSIDGE</h1>
  </header>
  <main>
  <a href="http://localhost:8888">
    <button class="button">
      hover
    </button>
  </a>
  </main>
</template>

<style scoped>
.button {
  border-radius: 4px;
  background-color: #26a851;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
