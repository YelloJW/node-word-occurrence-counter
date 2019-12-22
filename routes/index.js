var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const previous_urls = []

const userHistory = (example_url) => {
  previous_urls.push(example_url)
  return previous_urls
}

const countWords = (wordArray) => {
        const wordCount = {};
        for (let i = 0; i < wordArray.length; i++) {
          let num = wordArray[i];
          wordCount[num] = wordCount[num] ? wordCount[num] + 1 : 1;
        }
        return wordCount
}

const getWords = async (req, res) => {
  // return `Hey are you ready to count the words in ${example_url}`
  const example_url = req.body.example_url;
  await fetch(example_url)
    .then((res) => {
        return res.text();
    }).then((body) => {
        // console.log(body);
        const string = body.replace(/[^a-zA-Z ]/g, ' ');
        return string.split(' ');
    }).then((wordArray) => {
        // console.log(wordArray);
        return countWords(wordArray);
    }).then((wordCount) => {
        console.log(wordCount);
        console.log(typeof(wordCount))
        res.render('index', {title: 'Word Occurrence Counter', example_url: example_url, result: wordCount, history: userHistory(example_url) })
    })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Word Occurrence Counter' });
});

router.post('/', function(req, res, next) {
  getWords(req, res);
});

module.exports = router;

