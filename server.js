require('dotenv').config();
const express  = require('express');
const path = require('path');
const axios = require('axios');
//const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8100;




//const  User = require('./controller/users');
//const Busdetail = require('./controller/busdetails');

app.use(express.static(path.join(__dirname , './view/build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





//app.post('/api/requestform', User.create);
//app.post('/api/bus_identity', Busdetail.create);
 

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});




 




app.listen(port, function() {
    console.log('connection successful on http://localhost:'+port);
});
