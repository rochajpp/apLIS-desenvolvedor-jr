const express = require('express')
const app = express();

const consign = require('consign');
const cors = require('cors');

require('dotenv').config();

//Middlewares
app.use(cors());
app.use(express.json());

// Carregando arquivos diretamente para dentro de app
consign()
    .include("./src/controllers")
    .then("./src/routes")
    .then("./src/models")
    .then("./config/db_config.js")
    .into(app);

module.exports = app;

