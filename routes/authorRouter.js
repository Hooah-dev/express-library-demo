const controller = require('../controllers/authorController');
const express = require('express');
const router = express.Router();


// submit author
router.post('/', controller.submitAuthor);
// get specific author
router.get('/:authorId', controller.getAuthorById);
// update author
router.put('/:authorId', controller.updateAuthor);
// delete author
router.delete('/:authorId', controller.deleteAuthor);

module.exports = router;