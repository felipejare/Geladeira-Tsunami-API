<script setup></script>

<template>
  <main class="container">
    <div class="stars"></div>
    <div class="stars2"></div>
    <body>
      <div class="divCenter">
        <h1 class="bemvindo">Bem vindos ao TSIDGE</h1>
        <a href="http://localhost:8888">
          <button class="button-64" role="button"><span class="text">Entre aqui!!1!</span></button>
        </a>
    </div>
    </body>
    
  </main>
</template>

<style scoped>
a:link {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration: none;
}
.bemvindo{
  margin-left: 40px;
}
main{
  color: #FFFFFF;
  background-color: #2f413a;
  background: linear-gradient(0, #2f413a, #000000);
}

body{
  align-items: center;
}

.divCenter { 
  box-shadow: #202928
   8px 8px;
 background-color: #4D6360; 
 width: 400px; 
 height: 250px; 
 left: 50%; 
 margin: -130px 0 0 -210px; 
 padding:10px;
 position: absolute; 
 top: 50%;
 border-radius: 10px;

}

.stars{
	width: 3px;
	height: 3px;
	border-radius: 50%;
}
.stars{
	width: 3px;
	height: 3px;
	border-radius: 50%;
	box-shadow: 50px 30px white,
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    400px 100px white,
    450px 20px white,
    500px 80px white,
    550px 130px white,
    600px 150px white,
    650px 20px white,
    700px 80px white,
    750px 130px white,
    800px 100px white,
    850px 50px white,
    900px 120px white,
    950px 110px white,
    1000px 30px white,
    1050px 80px white,
    1100px 130px white,
    1150px 40px white,
    1200px 100px white,
    1250px 130px white,
    1300px 80px white,
    1350px 20px white,
    1400px 50px white,
    1450px 40px white,
    1500px 140px white,
    1550px 50px white,
    1600px 30px white,
    1650px 100px white,
    1700px 111px white,
    1750px 122px white,
    1800px 145px white,
    1850px 20px white,
    1700px 150px white,
    320px 100px white;
}
@keyframes anim-stars {
    from {
        transform: translateY(780px);
    }
    to {
        transform: translateY(100px);
    }
}
.stars{
	animation: anim-stars 10s linear infinite;
}
.stars::after{
  content: " ";
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
    100px 80px white,
    80px 120px white,
    300px 20px white,
    250px 130px white,
    200px 50px white,
    150px 100px white,
    350px 100px white,
    450px 20px white,
    500px 60px white,
    550px 140px white,
    600px 122px white,
    650px 111px white,
    700px 10px white,
    750px 150px white,
    800px 140px white,
    850px 20px white,
    900px 140px white,
    950px 30px white,
    1000px 80px white,
    1050px 133px white,
    1100px 60px white,
    1150px 111px white,
    1200px 30px white,
    1250px 140px white,
    1300px 100px white,
    1350px 50px white,
    1400px 160px white,
    1450px 30px white,
    1500px 10px white,
    1550px 100px white,
    1600px 150px white,
    1650px 20px white,
    1700px 140px white,
    1750px 50px white,
    1800px 150px white,
    1850px 20px white,
    320px 100px white;

    

    
}
.stars{
	position: relative;
	width: 3px;
	height: 3px;
}
.stars::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 3px; 
}
.stars2{
  position: relative;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    450px 20px white,
    500px 60px white,
    550px 140px white,
    600px 122px white,
    650px 111px white,
    700px 10px white,
    750px 150px white,
    800px 140px white,
    850px 20px white,
    900px 140px white,
    950px 30px white,
    1000px 80px white,
    1050px 133px white,
    1100px 60px white,
    1150px 111px white,
    1200px 30px white,
    1250px 140px white,
    1300px 100px white,
    1350px 50px white,
    1400px 160px white,
    1450px 30px white,
    1500px 10px white,
    1550px 100px white,
    1600px 150px white,
    1650px 20px white,
    1700px 140px white,
    1750px 50px white,
    1800px 150px white,
    1850px 20px white,
    220px 115px white;
  animation: anim-stars 20s linear infinite;
}

.stars2::after{
  content: " ";
  position: absolute;
  top: 150px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 15px 15px white,
    125px 35px white,
    50px 80px white,
    10px 120px white,
    275px 90px white,
    230px 10px white,
    120px 130px white,
    300px 130px white,
    400px 100px white,
    450px 20px white,
    500px 80px white,
    550px 130px white,
    600px 150px white,
    650px 20px white,
    700px 80px white,
    750px 130px white,
    800px 100px white,
    850px 50px white,
    900px 120px white,
    950px 110px white,
    1000px 30px white,
    1050px 80px white,
    1100px 130px white,
    1150px 40px white,
    1200px 100px white,
    1250px 130px white,
    1300px 80px white,
    1350px 20px white,
    1400px 50px white,
    1450px 40px white,
    1500px 140px white,
    1550px 50px white,
    1600px 30px white,
    1650px 100px white,
    1700px 111px white,
    1750px 122px white,
    1800px 145px white,
    1850px 20px white,
    1700px 150px white,
    220px 115px white;
}






/* CSS */
.button-64 {
  margin: auto;
  margin-top: 40px;
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
