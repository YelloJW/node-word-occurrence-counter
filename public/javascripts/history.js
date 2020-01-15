const previous_urls = require('./count');

//function to return word counts for previously saved urls
const getSavedRecord = (res, saved_url) => {
  previous_urls.forEach((record) => {
  if(record[0] === saved_url){
    wordCount = record[1]
    res.render('index', {title: 'Word Occurrence Counter', url: saved_url, results: wordCount, history: previous_urls});
  }
  });
}

// above method could be refactored to below for reusability, with the render method above moved back into the router.get method in router/index.js
  // const getSavedRecord = (res, saved_url) => {
  //   previous_urls.forEach((record) => {
  //   if(record[0] === saved_url){
  //     wordCount = record[1]
  //     return {title: 'Word Occurrence Counter', url: saved_url, results: wordCount, history: previous_urls};
  //   }
  //   });
  // }

exports.getSavedRecord = getSavedRecord
