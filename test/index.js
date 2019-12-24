var express = require('express');
var request = require('supertest');
const { getWords } = require('../public/javascripts/main');

app = require('../app.js');

describe('GET / home page', function() {
  it('load home page', function(done) {
    request(app).get("/")
      .expect(200)
      .expect(/Word Occurrence Counter/,done)
  });
});

describe('POST / and load results from example url', function() {
  this.timeout(20000);
  it('load results when example url input and submitted', function(done) {
    request(app).post("/")
      .send({input_url: 'https://norvig.com/big.txt'})
      .expect(/Results for https:\/\/norvig.com\/big.txt/)
      .expect(/adventures/,done)
  });
});

describe('POST / and load results from other url', function() {
  this.timeout(20000);
  it('load results when other url input and submitted', function(done) {
    request(app).post("/")
      .send({input_url: 'https://bbc.com'})
      .expect(/https:\/\/bbc.com/,done)
  });
});

describe('POST / reload saved results', function() {
  this.timeout(20000);
  it('reload saved results when previously visited url selected from history', function(done) {
    request(app).post("/")
      .send({saved_url: 'https://norvig.com/big.txt'})
      .expect(/Results for https:\/\/norvig.com\/big.txt/)
      .expect(/adventures/,done)
  });
});

