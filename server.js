require('dotenv').config();
const express  = require('express');
const path = require('path');


const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8100;




const  User = require('./controller/users');
const Busdetail = require('./controller/busdetails');
const Contactus = require('./controller/contact')

app.use(express.static(path.join(__dirname , './view/build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





app.post('/api/users', User.create);
app.get('/api/users', User.index);
app.get('/api/users/:id', User.show);
app.delete('/api/users', User.remove);

app.post('/api/busbooking', Busdetail.create);
app.get('/api/busbooking', Busdetail.index);
app.get('/api/busbooking/:userId', Busdetail.show);


app.post('/api/contact_us', Contactus.create);
app.get('/api/makepayment/:id', Busdetail.payment); // Make an update


 




app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './view/build/index.html'));
});









app.listen(port, function() {
    console.log('connection successful on http://localhost:'+port);
});
