const fetch = require('node-fetch');
const previous_urls = []
const sortHighToLow = require('./sort');


// function to save urls input by user and associated word counts
const userHistory = (input_url, wordCountArr) => {
  previous_urls.push([input_url, wordCountArr]);
  return previous_urls;
}

// function to count occurrences of words in an array
const countWords = (wordArray) => {
  const wordCount = {};
  wordArray.forEach((word) => {
    if (word !== '') {
    wordCount[word] = wordCount[word] ? wordCount[word] += 1 : 1;
    }
  });
  return wordCount;
}

// function to return string from URL DOM, call countWords function and render results in home page
const getWords = (res, input_url) => {
    fetch(input_url)
    .then(res => {
        return res.text();
    }).then((text) => {
        const string = text.replace(/[^a-zA-Z ]/g, ' ');
        return string.toLowerCase().split(' ');
    }).then(wordArray => {
        return countWords(wordArray);
    }).then(wordCount => {
        wordCountArr = Object.entries(wordCount);
        wordCountArr = sortHighToLow(wordCountArr);
        res.render('index', {title: 'Word Occurrence Counter', url: input_url, results: wordCountArr, history: userHistory(input_url, wordCountArr) });
    })
}


exports.getWords = getWords;
exports.previous_urls = previous_urls;

