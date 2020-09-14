const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = 3100

const mongoose = require('mongoose')

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const genreRouter = require('./routes/genreRouter');

//Set up DB connection
mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('connected to Mongo-DB'))
.catch((err) => console.error(err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/author', authorRouter);
app.use('/book', bookRouter);
app.use('/genre', genreRouter);

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`app listening on port ${port}`));