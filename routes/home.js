const express =require('express');
const router=express.Router();

router.get('/home',(req,res)=>{
    res.render('home',{title:'My Express App'});
})

module.exports=router;