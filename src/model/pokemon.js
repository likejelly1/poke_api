const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MyPokemon = new Schema({
    pokemonId: {
        type: Number,
        required: true,
        default: 0
    },
    name: {
        type: String,
        required:true
    },
    species: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    }

}, {
    timestamps:true
})

module.exports = mongoose.model("MyPokemon",MyPokemon)