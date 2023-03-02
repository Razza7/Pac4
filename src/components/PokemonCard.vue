
<script setup>
import {ref, onMounted, computed } from 'vue'
import PokemonDetalle from './PokemonDetalle.vue';




</script>

<template>
  <div>
  <div class="scene scene--card">
  <div class="card" @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
  v-bind:class="{ flipme: cardOne == 'flipped' }">
 
<div class="card__face card__face--front" >
    <h1>{{pokemonInfo.name}}</h1>
    <h2>Nº {{pokemonInfo.id}} </h2>
    <img :src="pokemonInfo.sprites?.front_default">
    <ul class="typecolor">
      <li v-for="item in pokemonInfo.types" :key='item.type.name'>
        <span >{{item.type.name}}</span>

      </li>
    </ul>
    
    

<button @click="$router.push({ name:'pokemon', params: {pokemonId: 'detalle'}} )">View more...</button>
</div>

  <div class="card__face card__face--back">
    <h1>{{pokemonInfo.name}}</h1>
    <h2>Abilities</h2>
    <img :src="pokemonInfo.sprites?.back_default">
    <ul class="ability">
      <li v-for="item in pokemonInfo.stats" :key='item.stat.name'>
        <span>{{item.stat.name}}</span> // <span>{{item.base_stat}}</span>

      </li>
    </ul>
  </div>

</div>
</div>
</div>

</template>

<script>

export default {
  data() {
    return {
      cardOne: "start"
    };
  },
  props: ['pokemonInfo']
};
</script>



<style scoped>
.scene {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  perspective: 1000px;
}


.card {
  display: flex;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  padding: 2rem 4rem;
  background-color: transparent;
}


.card__face {

  display: flex;
  flex-direction:column;
  padding: 1rem;
  border: 2px solid rgb(31, 171, 209);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 8px 8px #ffffffbd;
  width: fit-content;
  min-width: 200px;
  max-width: 250px;
  backface-visibility: hidden;
}

/*.card__face--front {
  
  
  
}*/

.card__face--back {
  background: rgba(30, 213, 195, 0.693);
  transform: rotateY(180deg);


 
}
.flipme {
  transform: rotateY(180deg);
}
.card button {
  margin-top: auto;
}

.typecolor {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color:aliceblue;
}

.typecolor li {
  display: inline-block;
  width: 4em;
  height: 2em;
  background: rgb(89, 37, 37);
  border: 2px snow;

}

.ability {
  list-style: none;
  margin: 0;
  padding: 0;
  color:aliceblue;

}
</style>
