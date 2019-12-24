var express = require('express');
var router = express.Router();
const { getWords, getSavedRecord } = require('../public/javascripts/main');


// get home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Word Occurrence Counter' });
});

// post results on home page
router.post('/', function(req, res, next) {
  const input_url = req.body.input_url;
  const saved_url = req.body.saved_url;
  // conditional to check if url has been input or selected from history
  if (input_url) {
  // method to get and count words from url DOM
  getWords(res, input_url);
  } else {
  //method to return saved word count from previously input url
  getSavedRecord(res, saved_url);
  };
});

module.exports = router;

