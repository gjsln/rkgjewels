const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port ${port}`));
