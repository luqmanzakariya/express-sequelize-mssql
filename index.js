const dotenv = require('dotenv')
dotenv.config()

const cors = require("cors");
const express = require("express");
const routes = require('./routes')
const logger = require('morgan')

const app = express();

const corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions));
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use('/api', routes)

const port = process.env.PORT;

app.listen(port, () => console.log("Server listening on port " + port));