<script setup></script>

<template>
  <main>
    <body>
      <div class="divCenter">
        <h1>Bem vindos ao TSIDGE</h1>
        <a href="http://localhost:8888">
          <button class="button-64" role="button"><span class="text">Entre aqui!!</span></button>
        </a>
    </div>
    </body>
  </main>
</template>

<style scoped>
main{
  color: #FFFFFF;
  background-color: #2f413a;
}
body{
  align-items: center;
}

.divCenter { 
 background-color: #4D6360; 
 width: 400px; 
 height: 150px; 
 left: 50%; 
 margin: -130px 0 0 -210px; 
 padding:10px;
 position: absolute; 
 top: 50%;
 border-radius: 10px; 
}



/* CSS */
.button-64 {
  align-items: center;
  background-image: linear-gradient(144deg,#377054, #438060 50%,#225c41);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(107, 206, 41, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  background-color: #2f413a;
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}



.login{
  background-color: green;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 500px;
  display: block;
}
</style>
