const express  = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8100;


app.use(express.static(path.join(__dirname , './view/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});


app.listen(port, function() {
    console.log('connection successful on http://localhost:'+port);
});