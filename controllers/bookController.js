const Book = require('../models/book');


// CREATE
exports.submitBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    isbn: req.body.isbn,
    genre: req.body.genre
  });
  try {
    const savedBook = await book.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// READ
exports.getBookById = async (req, res) => {
  try {
    const foundBook = await Book.findById(req.params.BookId);
    res.status(200).json(foundBook);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// DELETE
exports.deleteBook = async (req, res) => {
  try {
    const removedBook = await Book.findByIdAndDelete(req.params.BookId);
    res.status(200).json(removedBook);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// UPDATE
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.updateOne(
      { _id: req.params.BookId },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};