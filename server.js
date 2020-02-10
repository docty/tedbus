const express  = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8100;




const  User = require('./controller/users');
const Busdetail = require('./controller/busdetails');

app.use(express.static(path.join(__dirname , './view/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});


app.post('/api/requestform', User.create);
app.post('/api/bus_identity', Busdetail.create);

axios.post('/user',{
  firstName: 'code4mk',
  lastName: 'Hello-laravel'
})
  .then(function (response){
   //Getting data from response
  })
  .catch( function (error){
    // Describe error!
  });

  app.post();
  app.post('/apiuser/222fc5ce40e54bc8984784309a5f8eb5/apikey HTTP/1.1' , function (req, res) {

  });

app.listen(port, function() {
    console.log('connection successful on http://localhost:'+port);
});
