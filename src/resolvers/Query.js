const axios = require('axios');

async function getPokemons(parent, args, context) {
    return await axios({
        method: 'get',
        url: 'http://pokeapi.co/api/v2/pokemon'
    }).then((pokemons)=>{
        return pokemons.data.results
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = {
    getPokemons,
}