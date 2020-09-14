const controller = require('../controllers/genreController');
const express = require('express');
const router = express.Router();


// submit genre
router.post('/', controller.submitGenre);
// get specific genre
router.get('/:genreId', controller.getGenreById);
// update genre
router.put('/:genreId', controller.updateGenre);
// delete genre
router.delete('/:genreId', controller.deleteGenre);

module.exports = router;