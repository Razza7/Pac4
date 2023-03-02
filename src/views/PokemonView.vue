<script setup>

import {ref, onMounted} from 'vue' 
import PokemonCard from '../components/PokemonCard.vue';


</script>

<template>
  <div class="new">
    <h1>Detalles de pokemon:</h1>
    <p>ID: </p>
    
   
  </div>
</template>

<script>


export default {
  data() {
    return{
      props: ['pokemonInfo']
    }

  },
}
</script>

<style>
.new {
  display: grid;
}
</style>

