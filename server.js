//const index = require('./index.js')
const express = require('express')
const app = express();
//const port = 3000
const path = require('path');
const router = express.Router();

app.use(express.static('build'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});




//add the router
app.use('/', router);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

console.log('server started');