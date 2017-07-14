/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();

const wordObj = {
  "buzzWord" : "String",
  "points" : "Number",
  "heard" : false
};

router.route('/')
.get((req, res) => {
  res.send(wordObj);
  res.end();
});

module.exports = router;