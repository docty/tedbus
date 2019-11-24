const express  = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8100;




const  User = require('./controller/users');


app.use(express.static(path.join(__dirname , './view/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});


app.post('/api/requestform', User.create);
app.listen(port, function() {
    console.log('connection successful on http://localhost:'+port);
});
