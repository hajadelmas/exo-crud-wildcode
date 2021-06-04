const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const adminRoute = require('./routes/admin');


app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.use('/', adminRoute);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-ybnth.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .then(() => {
    app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
})
  .catch(() => console.log('Connexion à MongoDB échouée !'))

    