const pokemon = require('../model/pokemon')
const MyPokemon = require('../model/pokemon')
exports.add = (req, res, next) => {
    const name = req.body.name
    const pokemonId = req.body.pokemonId
    const species = req.body.species
    const imageUrl = req.body.imageUrl

    // console.log("name: "+ req.body.name)
    // console.log("pokemonId: "+pokemonId)
    // console.log("species: " + species)
    // console.log("imageUrl: " + imageUrl)
    



    const Post = new MyPokemon({
        pokemonId: pokemonId,
        name: name,
        species: species,
        imageUrl:imageUrl
    })

    Post.save()
        .then((result) => {
            res.status(201).json({
                message: "Adding into Your Pokemon",
                data: result 
            });
        
        })
        .catch(err => next(err))
    
}

exports.getAll = (req, res, next) => {
    const currentPage = req.query.page || 1
    const perPage = req.query.perPage || 4
    let totalItems
    MyPokemon.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return MyPokemon.find()
                .skip((parseInt(currentPage) - 1) * parseInt(perPage))
                .limit(parseInt(perPage))
        })
        .then(result => {
            res.status(200).json({
                message: "Data Berhasil Dipanggil!",
                data: result,
                totalItems: totalItems,
                perPage: parseInt(perPage),
                currentPage:parseInt(currentPage)
            })
        }) 
        .catch(err=> next(err))
    
}

exports.delete = (req, res, next) => {
    const myPokemonId = req.body.id
    MyPokemon.findByIdAndRemove(myPokemonId)
        .then(result => {
            res.status(200).json({
                message: "Pokemon Telah Dilepaskan !",
                data:result
            })
        })
        .catch(err=> next(err))
}

