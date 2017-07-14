/* jshint esversion: 6 */
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const buzzwordsRoute = require('./buzzwords.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/buzzwords', buzzwordsRoute);

const server = app.listen(3000, () => {
  console.log(`Server running on ${host}, at port ${port}`);
});