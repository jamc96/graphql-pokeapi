const axios = require('axios');

async function getAllPokemons() {
    return await axios({
        method: 'get',
        url: 'http://pokeapi.co/api/v2/pokemon'
    }).then((pokemons)=> {
        return pokemons.data.results
    }).catch((err)=>{
        console.log(err);
    })
}
async function getPokemonDetails(url) {
    const pokemon = await axios({
        method: 'GET',
        url: url
    })
    return {
        name: pokemon.data.name,
        weight: pokemon.data.weight,
        height: pokemon.data.height,
        baseExperience: pokemon.data.base_experience,
        abilities: pokemon.data.abilities.map( x => ({ name: x.ability.name})),
        moves: pokemon.data.moves.map( x => ({ name: x.move.name })),
    }
}
async function getPokemons(parent, args, context) {
    const pokemons = await getAllPokemons()
    const pokemonDetails = pokemons.map(x => getPokemonDetails(x.url))
    // return all pokemons
    return await Promise.all(pokemonDetails)
}
module.exports = {
    getPokemons,
}