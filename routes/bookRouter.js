const controller = require('../controllers/bookController');
const express = require('express');
const router = express.Router();


// submit book
router.post('/', controller.submitBook);
// get specific book
router.get('/:bookId', controller.getBookById);
// update book
router.put('/:bookId', controller.updateBook);
// delete book
router.delete('/:bookId', controller.deleteBook);

module.exports = router;