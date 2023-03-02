import axios from 'axios'

const myAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const pokeApi={
  async getPokemons(){
  let res = [] 
  for (let i = 0; i <= 9; i++) {
  const { data } = await myAPI.get(`/pokemon/${i + 1}`);
  res.push(data)
}
return res
},

  async getPokemon(id){
  let res = [] 
  const { data } = await myAPI.get('/pokemon' + id);
  res.push(data)

return res
},

}



