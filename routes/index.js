var express = require('express');
var router = express.Router();
const locatStrategy = require('passport-local');
const passport = require('passport');
const User = require('./users');


passport.use(new locatStrategy(User.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile',isLoggedIn,(req,res)=>{  //here is loggedin means ka app login hu ya nhi
res.render('profile')
})
// register route for the user

router.get('/register',(req,res)=>{
  res.render('register',{title:'register page'});
}); 
//
 

router.post('/register' ,(req,res)=>{
User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
  if(err){
  console.log(err)
  return res.render('error')
  }
  passport.authenticate('local')(req,res,()=>{
    res.redirect('/profile');
  });
});
});


// Login route for the user
router.post('/login',passport.authenticate('local',{
   successRedirect:'/profile',
  failureRedirect:'/register',
}),(req,res)=>{});

// logout route for the user

router.get('/logout',(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      return next(err);
    }
    res.redirect('/');
  });
})

// now we will create the middleware for the user to check whether the user is login or not
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){ //means kaya app loggin hu 
    return next();
  }
  res.redirect('/'); // age
} 
module.exports = router;










  //router.get('/flash',(req,res)=>{
  //   req.flash("myflash",'this is my flash message');
  //    res.send('flash message created');
  //     setTimeout(()=>{
  //       res.redirect('/');
  //     },5000);
  // });
  
  // // now we will create the route for the flash message;
  
  // router.get('/getflash',(req,res)=>{
  //   // req.flash('myflash');
  //   console.log(req.flash("myflash"));
  //   res.send('flash message created');
  // });
  