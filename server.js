const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/dbconfig').mongoURI;

// Connect to MongoDB

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port ${port}`));
