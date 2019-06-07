const express = require("express");
const app = express();
const md5 = require("md5");
require("dotenv").config();

const { BitlyClient } = require("bitly");
const bitly = new BitlyClient(process.env.BITLY_API_KEY);

//Code to generate random link

app.get("/generate-joblink", (req, res) => {
  const secretKey = "application_123@"; // this must be added to .env file
  const jobName = "Software Developer at Clodify"; // will retreive from db or session

  //Adding Parameters through which job id will generate
  const jobID = secretKey.concat(jobName); //unique job id for which candidate will apply

  const applyJobID = md5(jobID).substr(0, 6); // store this id to db with reference to the job table so that it can help us to identify job

  const link = `https://app.fellowapp.co/apply/?jobid=${applyJobID}`;
  bitly
    .shorten(link)
    .then(shortlink => {
      res.json({ status: 200, Link: link, shorten_Link: shortlink.url }); // link generated on the basis of jobName and secretKey variable
    })
    .catch(err => console.log(err));
});

app.listen(3000, err => {
  if (err) throw err;
  console.log("Running at 3000");
});
