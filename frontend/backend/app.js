const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')


// Connect mongoDB
promise = global.Promise
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected")
}).catch((error) => {
  console.log("Database couldn't be connected to: " + error)
})

const postAPI = require('../backend/routes/post.route');
const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors());

//API
app.use('/api', postAPI)

//create port
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`)
})

/*async function start() {
  try {
    const url = `mongodb+srv://kamilk:nqXNwT4zSMKpvddC@cluster0.llvf1.mongodb.net/todo`;

    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    app.listen(PORT, () => {
      console.log(`Connected to port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start();

const password = 'nqXNwT4zSMKpvddC';
const dbname = 'mevn';

*/

//error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
