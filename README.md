A node.js client-server application for counting occurrences of a word in the DOM of a URL(input). 

Run with command ```npm start``` on localhost:8000
and test using command ```npm test``` (includes test coverage report)

Using:
- Express as a web framework
- Jade as a view engine
- Mocha as a testing framework with Superagent
- Nyc to provide a test coverage report

Tech stack chosen on the basis of no prior experience with Express, Jade, Mocha or Nyc and opportunity to learn new technologies

Tests of the apps basic functionality, with associated test coverage report:
-	1 x server test which loads the home page and looks for the app title
-	2 x POST request tests which send different input URLs and check for results being posted on the index view page
-	1 x POST request test, which sends a previously saved URL and reloads the saved results

```
--------------------------------|---------|----------|---------|---------|-------------------
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------------|---------|----------|---------|---------|-------------------
All files                       |   93.06 |       75 |    87.5 |   92.86 |
 node-word-occurrence-counter   |   78.26 |        0 |       0 |   78.26 |
  app.js                        |   78.26 |        0 |       0 |   78.26 | 25,31,32,35,36
 ...-counter/public/javascripts |     100 |      100 |     100 |     100 |
  main.js                       |     100 |      100 |     100 |     100 |
 ...d-occurrence-counter/routes |     100 |      100 |     100 |     100 |
  index.js                      |     100 |      100 |     100 |     100 |
--------------------------------|---------|----------|---------|---------|-------------------
```

 Some areas for improvement given more time:
 - Validation of url inputs
 - Flexibility of response to different DOM complexities (e.g. https://norvig.com/big.txt vs https://www.bbc.co.uk/ 
 - Performance when rendering results (pagination)
 - Dynamic sorting method, currently fixed based on word count DESC 
 - Results rendered at '/#results' instead of '/' for UX
 - AJAX for reloading saved searches
 - UI / UX (move section links into sticky navbar) 
