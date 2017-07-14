/* jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buzzwordsRoute = require('./routes/buzzwords.js');
const helpers = require('./helpers.js');
const resetRoute = require('./routes/reset.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/buzzwords', buzzwordsRoute);
app.use('/reset', resetRoute);

const server = app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});