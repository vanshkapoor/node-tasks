const express = require("express");
const app = express();
const md5 = require("md5");
//Code to generate random link

app.get("/generate-joblink", (req, res) => {
  const secretKey = "application_123@"; // this must be added to .env file
  const jobName = "Software Developer at Clodify"; // will retreive from db or session

  //Adding Parameters through which job id will generate

  const jobID = secretKey.concat(jobName); //unique job id for which candidate will apply

  const applyJobID = md5(jobID).substr(0, 6); // store this id to db with reference to the job table so that it can help us to identify job

  res.json({ status: 200, link: `https://app.fellowapp.co/apply/?jobid=${applyJobID}` }); // link generated on the basis of jobName and secretKey variable
});

app.listen(3000, err => {
  if (err) throw err;
  console.log("Running at 3000");
});
