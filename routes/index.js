var express = require('express');
var router = express.Router();
const { getWords } = require('../public/javascripts/count');
const { getSavedRecord } = require('../public/javascripts/history');
const { sort } = require('../public/javascripts/sort');


// get home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Word Occurrence Counter' });
});

// post results on home page
router.post('/', function(req, res, next) {
  const input_url = req.body.input_url;
  getWords(res, input_url)
});

// get saved result
router.get('/saved_result', function(req, res, next) {
  const saved_url = req.query.saved_url;
  getSavedRecord(res, saved_url)
});

// seudo code for sorting route, based on refactoring getSavedRecord in history.js so that it returns an object, moving res.render() on line 8 to line 23 of this file
// router.get('/sort', function(req,res,next) {
  // const sortMethod = req.query.sort; // form input with 'select' and 'option(s)' for dropdown named 'sort'
  // const url = req.query.url // hidden form input with name set to 'url' and value set to current url (input_url)
  // wordCount = getSavedRecord(saved_url).results // return word count array for current url
  // wordCount = sort(wordCount, sortMethod) // method imported from sort.js
  // res.render('index', {title: 'Word Occurrence Counter', url: saved_url, results: wordCount, history: previous_urls});
// }

module.exports = router;

