/* jshint esversion: 6 */

const allTheWords = [];

const postBody = (req, res) => {
  if (allTheWords.map((curWord) => {
    return curWord.buzzWord;}).indexOf(req.body.buzzWord) > -1){
    res.send({"success" : false});
  } else {
    allTheWords.push({"buzzWord": req.body.buzzWord,
      "points": parseInt(req.body.points)});
    res.send({"success" : true});
  }
};

module.exports = {
  allTheWords,
  postBody
};