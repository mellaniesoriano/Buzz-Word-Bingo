/* jshint esversion: 6 */

const allTheWords = [];

const postBody = (req, res) => {
  if (allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord) > -1 || allTheWords.length >= 5){
    res.send({"success" : false});
  } else {
    allTheWords.push({"buzzWord": req.body.buzzWord,
      "points": parseInt(req.body.points),
      "heard": false,
      "newScore": 0});
    res.send({"success" : true,
      "newScore" : 0});
  }
};

const putBody = (req, res) => {
  const buzzObj = allTheWords[allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord)];

  if (allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord) < -1){
    res.send({"success" : false});
  } else {
    buzzObj.heard = true;
    buzzObj.newScore += buzzObj.points;
    res.send({"success" : true, "newScore" : buzzObj.newScore});
  }
};

module.exports = {
  allTheWords,
  postBody,
  putBody
};