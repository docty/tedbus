const express  = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname , './view/build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});

app.listen('8100', function() {
    console.log('connection successful');
});