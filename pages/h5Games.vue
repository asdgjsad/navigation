<script setup lang="ts">
import {type Ref, ref} from "vue"
import {type H5GamesArr} from "~/types/h5Games";

const data: Ref<H5GamesArr> = ref([])
fetch("/json/h5Games.json").then(res=>res.json()).then(res=>{
  data.value = res
})

</script>

<template>
  <div class="app">
    <Header></Header>
    <div class="main">
      <a class="game_item" v-for="item in data" :key="item.id" :href="item.url" target="_blank">
        <div :style="'background-image: url(' + item.img + ')'"></div>
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.main{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 15px;
  padding: 10px;
}
@media screen and (max-width: 800px) {
  .main{
    grid-template-columns: repeat(4,1fr);
  }
}
@media screen and (max-width: 600px) {
  .main{
    grid-template-columns: repeat(3,1fr);
  }
}
@media screen and (max-width: 500px) {
  .main{
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (max-width: 400px) {
  .main{
    grid-template-columns: repeat(1,1fr);
  }
}
.game_item{
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 400ms;
  text-decoration: none;
  color: black;
}
.game_item:hover{
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
}
.game_item>div{
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 5px;
}
.game_item>p{
  width: 100%;
  height: 20%;
  text-align: center;
}
</style>