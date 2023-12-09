var express = require('express');
const { set } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/flash',(req,res)=>{
  req.flash("myflash",'this is my flash message');
   res.send('flash message created');
    setTimeout(()=>{
      res.redirect('/');
    },5000);
});

// now we will create the route for the flash message;

router.get('/getflash',(req,res)=>{
  // req.flash('myflash');
  console.log(req.flash("myflash"));
  res.send('flash message created');
});
module.exports = router;
