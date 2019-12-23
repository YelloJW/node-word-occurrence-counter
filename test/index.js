var express = require('express');
var request = require('supertest');
const { getWords } = require('../public/javascripts/main');

app = require('../app.js');

describe('GET /', function() {
  it('loads the home page', function(done) {
    request(app).get("/")
      .expect(200)
      .expect(/Word Occurrence Counter/)
      .expect(/Word Occurrence Counter/, done)

  });
});

describe('POST /', function() {
  this.timeout(20000);
  it('loads results when url input and submitted', function(done) {
    request(app).post("/")
      .send({input_url: 'https://norvig.com/big.txt'})
      .expect(/Results for https:\/\/norvig.com\/big.txt/)
      .expect(/adventures/,done)
  });
});

describe('POST /', function() {
  this.timeout(20000);
  it('loads results when url input and submitted', function(done) {
    request(app).post("/")
      .send({input_url: 'https://bbc.com'})
      .expect(/https:\/\/bbc.com/,done)
  });
});

describe('POST /', function() {
  this.timeout(20000);
  it('loads results when previously visited url selected', function(done) {
    request(app).post("/")
      .send({saved_url: 'https://norvig.com/big.txt'})
      .expect(/Results for https:\/\/norvig.com\/big.txt/)
      .expect(/adventures/,done)
  });
});

