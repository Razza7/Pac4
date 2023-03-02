<script setup>

import PokemonCard from '../components/PokemonCard.vue'
import {pokeApi} from '../services/services.js'
import { ref,computed,onMounted } from 'vue'


const pokemonList= ref([])
const search= ref('')

const filteredPokemonList=computed(()=>{
  return pokemonList.value.filter(pokemon=>{
    return pokemon.name.includes(search.value)
  })
})

onMounted(async()=>{
pokemonList.value=await pokeApi.getPokemons()

})



</script>

<template>
  <div class="new" >
    <h1>Lista de Pokemons</h1>
      <input type="text" v-model="search" placeholder="Type Pokemon's name or Id to load pokemons..." />
          

    <div class="cards">
      <PokemonCard  v-for="(data,index) in filteredPokemonList" :key="index" :pokemon-info="data" /> 
      
    </div>
  
  </div>

  
</template>

<script>


</script>



<style>
.new {
 display: grid;
 row-gap: 1rem
 
}


.cards {
  display: flex;
  gap: 0,5rem;
  max-width: 50vw;
  flex-wrap: wrap;
}
</style>