const express = require('express');
const mongoose = require('mongoose');
const app = express();
const middleware = require('./middleware');


app.use('/api',middleware);
app.use(express.json());

mongoose
  .connect("mongodb://localhost/trash", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));


app.listen(8888,() => console.log('Server running on 8888 PORT'))