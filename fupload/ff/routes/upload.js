var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer()

router.post('/',upload.none(),(req,res,next)=>{
  console.log(req.body);
});





module.exports = router;
