const Genre = require('../models/genre');


// CREATE
exports.submitGenre = async (req, res) => {
  const genre = new Genre({
    name: req.body.name
  });
  try {
    const savedGenre = await genre.save();
    res.status(200).json(savedGenre);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// READ
exports.getGenreById = async (req, res) => {
  try {
    const foundGenre = await Genre.findById(req.params.genreId);
    res.status(200).json(foundGenre);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// DELETE
exports.deleteGenre = async (req, res) => {
  try {
    const removedGenre = await Genre.findByIdAndDelete(req.params.genreId);
    res.status(200).json(removedGenre);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// UPDATE
exports.updateGenre = async (req, res) => {
  try {
    const updatedGenre = await Genre.updateOne(
      { _id: req.params.genreId },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedGenre);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};