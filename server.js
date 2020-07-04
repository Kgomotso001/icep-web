const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/icep'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/icep/index.html'));});
app.listen(process.env.PORT || 8080);

