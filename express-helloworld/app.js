var express = require('express');
app = express();

app.get('/', function (req, res) {
  console.log('Get');
  res.send('Hello World!\n');
});

app.get('/mars', function(req, res) {
  console.log('Get mars');
  res.send('Hello Mars!\n');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

