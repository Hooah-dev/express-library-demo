const Author = require('../models/author');


// CREATE
exports.submitAuthor = async (req, res) => {
  const author = new Author({
    firstName: req.body.firstName,
    familyName: req.body.familyName,
    dateOfBirth: req.body.dateOfBirth,
    dateOfDeath: req.body.dateOfDeath
  });
  try {
    const savedAuthor = await author.save();
    res.status(200).json(savedAuthor);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// READ
exports.getAuthorById = async (req, res) => {
  try {
    const foundAuthor = await Author.findById(req.params.authorId);
    res.status(200).json(foundAuthor);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// DELETE
exports.deleteAuthor = async (req, res) => {
  try {
    const removedAuthor = await Author.findByIdAndDelete(req.params.authorId);
    res.status(200).json(removedAuthor);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// UPDATE
exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.updateOne(
      { _id: req.params.authorId },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};