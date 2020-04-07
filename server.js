const index = require('./index.js')
const express = require('express')
const app = express();
const port = 3000
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.use(express.static('build'));

//add the router
app.use('/', router);
app.listen(process.env.port);

console.log('Running at Port 3000');