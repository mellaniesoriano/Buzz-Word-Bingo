/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const helpers = require('../helpers.js');

router.route('/')
.get((req, res) => {
  res.send(helpers.allTheWords);
})
.post((req, res) => {
  helpers.postFunc(req, res);
})
.put((req, res) => {
  helpers.putFunc(req, res);
})
.delete((req, res) => {
  helpers.deleteFunc(req, res);
});


module.exports = router;