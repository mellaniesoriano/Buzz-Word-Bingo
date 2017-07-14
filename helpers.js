/* jshint esversion: 6 */

let allTheWords = [];

const postFunc = (req, res) => {
  const myWord = allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord);

  if (myWord > -1 || allTheWords.length >= 5){
    res.send({"success" : false});
  } else {
    allTheWords.push({"buzzWord": req.body.buzzWord,
      "points": parseInt(req.body.points),
      "heard": false,
      "newScore": 0});
    res.send({"success" : true,
      "newScore" : 0});
  }
  console.log(allTheWords.map((curWord) => {
      return curWord.buzzWord;}).indexOf(req.body.buzzWord));
};

const putFunc = (req, res) => {
  const buzzObj = allTheWords[allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord)];
  const myWord = allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord);

  if (myWord < -1){
    res.send({"success" : false});
  } else {
    buzzObj.heard = true;
    buzzObj.newScore += buzzObj.points;
    res.send({"success" : true, "newScore" : buzzObj.newScore});
  }
};

const deleteFunc = (req, res) => {
  const myWord = allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord);
  if (myWord < -1){
    res.send({"success" : false});
  } else {
    allTheWords.splice(myWord, 1);
    res.send({"success" : true});
  }
};

const reset = (req, res) => {
  if (req.body.buzzWord) {
    allTheWords = [];
    res.end(`{"success": true}`);
  }
};

const getAllTheWords = () => {
  return allTheWords;
};

module.exports = {
  getAllTheWords,
  postFunc,
  putFunc,
  deleteFunc,
  reset
};