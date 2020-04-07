const db = require('./queries')
const express = require('express')
const app = express();
const port = 3000
const path = require('path');
const router = express.Router();

const bodyParser = require('body-parser')

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});


app.use(express.static('build'));

//add the router
app.use('/', router);
app.listen(3500);

console.log('Running at Port 3500');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.post('/guests', db.createGuest)
app.get('/guests/:id', db.getGuestById)
app.put('/guests/:id', db.updateGuest)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})