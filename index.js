// var axios = require("axios");
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Hey, What's Your Name?",
            name: "name"
        }
    
    ]).then(function(inquirerResponse) {
        console.log("")
        console.log("              ------------------------------------")
        console.log("                   Welcome To Bored API, " + inquirerResponse.name)
        console.log("              ------------------------------------")
        console.log("   In this application you are able to find activities near you")
        console.log("                by just providing an address and")
        console.log("        the type of activity which you are looking to do.")
    })
// var queryUrl = "http://www.boredapi.com/api/activity/";

// console.log(queryUrl)

// axios.get(queryUrl).then(
//     function(response) {
//       console.log(response.data);
//     })
//     .catch(function(error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.log("---------------Data---------------");
//         console.log(error.response.data);
//         console.log("---------------Status---------------");
//         console.log(error.response.status);
//         console.log("---------------Status---------------");
//         console.log(error.response.headers);
//       } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an object that comes back with details pertaining to the error that occurred.
//         console.log(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log("Error", error.message);
//       }
//       console.log(error.config);
//     });
  

