const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PokemonRoutes = require('./src/routes/pokemon')

const app = express();
const PORT = process.env.PORT ||4000
// config
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
    
})


// routes

app.use('/myPokemonList',PokemonRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static('/poke_web/build'))
}
io
socket = io.listen(process.env.PORT);
mongoose.connect('mongodb+srv://jelly:fSVfA3vDbFbOBrXA@cluster0.ozknc.mongodb.net/poke_api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => {
        app.listen(PORT,console.log("Server is running"));
        
    })
    .catch((err)=> console.log(err))