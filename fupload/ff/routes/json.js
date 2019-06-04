var express = require('express');
var router = express.Router();
var csvtojson = require('csvtojson');

router.get('/',(req,res)=>{
  csvtojson().fromFile("./routes/xx.csv").then((obj)=>{
    console.log(obj);
  })
})

module.exports = router;
