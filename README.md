A node.js client-server application for counting occurrences of a word in the DOM of a URL(input). 

Run with command ```npm start``` on localhost:8000
test using command ```npm test```

Using:
- Express as a web framework
- Jade as a view engine
- Mocha as a testing framework with Superagent
- Nyc to provide a test coverage report

Tests for loading home page (server test), posting a url and returning results (coverage report below)

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
 - Performance when rendering results (pagination)
 - Rendering results (rendered at '/#results' rather than '/') 
 - Dynamic sorting method, sort currently fixed (word count desc) 
 - Utilising AJAX to reload saved searches
 
