const fetch = require('node-fetch');
const previous_urls = []

//function to sort words by count desc
const sortWords = (wordCountArr) => {
  wordCountArr = wordCountArr.sort(function Comparator(a, b) {
     if (a[1] < b[1]) return 1;
     if (a[1] > b[1]) return -1;
     return 0;
    });
  return wordCountArr
}

//function to return word counts for previously saved urls
const getSavedRecord = (res, saved_url) => {
  previous_urls.forEach((record) => {
  if(record[0] === saved_url){
    wordCount = record[1]
    res.render('index', {title: 'Word Occurrence Counter', url: saved_url, results: wordCount, history: previous_urls});
  }
  });
}

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
const getWords = async (res, input_url) => {
   await fetch(input_url)
    .then((res) => {
        return res.text();
    }).then((body) => {
        const string = body.replace(/[^a-zA-Z ]/g, ' ');
        return string.toLowerCase().split(' ');
    }).then((wordArray) => {
        return countWords(wordArray);
    }).then((wordCount) => {
        wordCountArr = Object.entries(wordCount);
        wordCountArr = sortWords(wordCountArr);
        res.render('index', {title: 'Word Occurrence Counter', url: input_url, results: wordCountArr, history: userHistory(input_url, wordCountArr) });
    })
}

exports.getWords = getWords;
exports.countWords = countWords;
exports.userHistory = userHistory;
exports.getSavedRecord = getSavedRecord

