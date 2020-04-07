const index = require('./index.js')
const express = require('express')
const app = express();
const port = 3000
const path = require('path');
const router = express.Router();

//router.get('/',function(req,res){
 // res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
//});

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.use(express.static('build'));

//add the router
app.use('/', router);
app.listen(process.env.port || port);

console.log('Running at Port 3000');