/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.send(allTheWords);
})
.post((req, res) => {
  if (allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord) > -1){
    res.send({"success" : false});
  } else {
    allTheWords.push({"buzzWord": req.body.buzzWord,
      "points": Number(req.body.points)});
    console.log('chk points..', Number(req.body.points));
    res.send({"success" : true});
  }
});

const allTheWords = [];
const score = 0;


module.exports = router;