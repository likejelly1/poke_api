const express = require('express')
const router = express.Router();

// Controller 
const PokemonController = require('../controller/pokemon')


// Pokemon Controller
router.get('/getAll',PokemonController.getAll)
router.post('/add', PokemonController.add);
// router.put('/update', PokemonController.update);
router.delete('/delete', PokemonController.delete);

module.exports = router