const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors');

process.env.PWD = process.cwd()

//Adding for node json calls
const db = require('./queries')
const bodyParser = require('body-parser')



app.use(cors());

//app.use(express.static('public'));
app.use(express.static(process.env.PWD + '/public'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});



//Adding for Database Scripts
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


//app.get('/users', function(req, res){
//  res.send(db.getUsers);
//  res.end();
//});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.post('/guests', db.createGuest)
app.get('/guests/:id', db.getGuestById)
app.put('/guests/:id', db.updateGuest)

//addresses
app.get('/addresses/:id', db.getAddressByGuestId)
app.post('/addresses', db.insertGuestAddress)
app.put('/addresses/:id', db.updateGuestAddress)

//For website, and also database
app.use('/', router);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});