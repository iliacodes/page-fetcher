const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  console.log("the first argument", args[0])
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const pathToCheck = args[1];
  fs.stat(pathToCheck), (err, stats) => {
    if (err) {
      console.error(err);
    }
    console.log("error", stats.isDirectory)
    console.log("stats", stats)
  }

  fs.writeFile(args[1], body, err => {
    if (err) {
      // fs.stat(args[1], (err, stats) => {
      //   stats.isDirectory();
      // CHECK NODE DOCS TO PROGRESS
        console.log("error", err)
      }
    })
    // file written successfully
  });


