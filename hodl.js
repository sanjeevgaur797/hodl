var express = require('express');
var router = express.Router();
var pool=require('./pool');




/* GET home page. */
router.get('/interface', function(req, res, next) {
  
  
  
    res.render('doctor',{msg:''})
  }
)
 


router.post('/submit',function(req,res,next){
  console.log(req.body)
  
 
  
  pool.query('insert into hodl(name,last,buy,sell,volume,base)values(?,?,?,?,?,?)',[
    req.body.name,req.body.last,req.body.buy,req.body.sell,req.body.volume,req.body.base],function(err,result)
    {
      if(err){
        console.log(err)
      res.render('doctor',{msg:'Fail This Record'})}
      else{
      res.render('abc',{msg:'Success This Record'})}
    
})
})
router.get('/displayall',function(req,res){
 
    
  
  pool.query('select * from hodl',function(err,result){
    if(err)
    {
      res.render('displayall',{data:[]})
    }
    else{
      res.render('displayall',{data:result})
    }
  })

})

module.exports = router;
