var axios = require("axios");
var inquirer = require("inquirer");


        inquirer
            .prompt([
                {
                    type: "input",
                    message: "                 Hey, What's Your Name?",
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
                console.log("                               ~")
                            //-------------------------------------------------------------------//

                inquirer
                    .prompt ([
                        {
                            type: "input",
                            message: "Please input your address",
                            name: "addr"
                        }
                            ])
                        .then(function(inquirerResponse) {
                            var location = inquirerResponse.addr
                            var replaced = location.split(' ').join('%20');
                            var queryUrl2 = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + replaced + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDq6fJPj-CEGwnp4dUvWQdzUGjQ2P-co1A";

                                    axios.get(queryUrl2).then(
                                        function(response) {
                                            console.log("          Is this the correct address?")
                                            console.log("                        |")
                                            console.log("   " + response.data.candidates[0].formatted_address);

                                inquirer
                                    .prompt([
                                        {
                                            type: "list",
                                            message:" ",
                                            choices: ["Yes", "No"],
                                            name: "yesNo"
                                        }
                                    ]).then(function(inquirerResponse) {

                                        if(inquirerResponse.yesNo === "Yes") {

                                            inquirer
                                            .prompt([
                                                {
                                                    type: "list",
                                                    message: "What type of activity would you like to do?",
                                                    choices: ['charity', 'cooking', 'music', 'diy', 'education', 'social', 'busywork', 'recreational', 'relaxation'],
                                                    name: "type"
                                                }
                                            ])
                                            .then(function(inquirerResponse) {
                                                var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + inquirerResponse.type;
                            
                                                axios.get(queryUrl1).then(
                                                    function(response) {
                                                        console.log("              Activity")
                                                        console.log("" + response.data.activity + "!!");
                                                        if (response.data.participants = 1) {
                                                            console.log("This activity requires " + response.data.participants + " person")
                                                        }
                                                        else {
                                                            console.log("This activity requires at least " + inquirerResponse.data.participants + " people")
                                                        }
                                                        console.log("The type of activity is " + response.data.type);
                                                }
                                            )
                            
                            
                            })

                                        } else {
                                            inquirer
                                            .prompt ([
                                                {
                                                    type: "input",
                                                    message: "Please retry to input your address",
                                                    name: "addr"
                                                }
                                                    ])
                                                .then(function(inquirerResponse) {
                                                    var location = inquirerResponse.addr
                                                    var replaced = location.split(' ').join('%20');
                                                    var queryUrl2 = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + replaced + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDq6fJPj-CEGwnp4dUvWQdzUGjQ2P-co1A";
                        
                                                            axios.get(queryUrl2).then(
                                                                function(response) {
                                                                    console.log("          Is this the correct address?")
                                                                    console.log("                        |")
                                                                    console.log("   " + response.data.candidates[0].formatted_address);
                        
                                                        inquirer
                                                            .prompt([
                                                                {
                                                                    type: "list",
                                                                    message:" ",
                                                                    choices: ["Yes", "No"],
                                                                    name: "yesNo"
                                                                }
                                                            ]).then(function(inquirerResponse) {
                        
                                                                if(inquirerResponse.yesNo === "Yes") {
                        
                                                                    inquirer
                                                                    .prompt([
                                                                        {
                                                                            type: "list",
                                                                            message: "What type of activity would you like to do?",
                                                                            choices: ['charity', 'cooking', 'music', 'diy', 'education', 'social', 'busywork', 'recreational', 'relaxation'],
                                                                            name: "type"
                                                                        }
                                                                    ])
                                                                    .then(function(inquirerResponse) {
                                                                        var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + inquirerResponse.type;
                                                    
                                                                        axios.get(queryUrl1).then(
                                                                            function(response) {
                                                                                console.log("              Activity")
                                                                                console.log("" + response.data.activity + "!!");
                                                                                if (response.data.participants = 1) {
                                                                                    console.log("This activity requires " + response.data.participants + " person")
                                                                                }
                                                                                else {
                                                                                    console.log("This activity requires at least " + inquirerResponse.data.participants + " people")
                                                                                }
                                                                                console.log("The type of activity is " + response.data.type);
                                                                        }
                                                                    )
                                                    
                                                    
                                                    })
                        
                                                                } else {
                                                                    console.log("Something went wrong, please run again and try another address")
                                                                }
                        
                                                            })
                        
                                                            }
                                                        )
                        
                        
                                                                //----------------JOSE-----------------//
                        
                        
                                                             //------AFTER CODE-------//
                                // inquirer
                                // .prompt([
                                //     {
                                //         type: "input",
                                //         message: "In a scale of 1-5 how much fun did you have during this activity?",
                                //         name: "funScale"
                        
                                //     }
                                // ])
                                // .then(function(inquirerResponse) {
                                //     if (inquirerResponse.funScale >= 1 && inquirerResponse.funScale <= 5) {
                                //         console.log("         We are glad you enjoyed the activity!")
                                //     }
                                // }
                                // )
                            })
                                        }

                                    })

                                    }
                                )


                                        //----------------JOSE-----------------//


                                     //------AFTER CODE-------//
        // inquirer
        // .prompt([
        //     {
        //         type: "input",
        //         message: "In a scale of 1-5 how much fun did you have during this activity?",
        //         name: "funScale"

        //     }
        // ])
        // .then(function(inquirerResponse) {
        //     if (inquirerResponse.funScale >= 1 && inquirerResponse.funScale <= 5) {
        //         console.log("         We are glad you enjoyed the activity!")
        //     }
        // }
        // )
    })
                        //-------------------------------------------------------------------//






// axios.get(queryUrl).then(
//     function(response) {
//       console.log(response.data);
//     })
//     .catch(function(error) {
//       if (error.response) {

//         console.log("---------------Data---------------");
//         console.log(error.response.data);
//         console.log("---------------Status---------------");
//         console.log(error.response.status);
//         console.log("---------------Status---------------");
//         console.log(error.response.headers);
//       } else if (error.request) {

//         console.log(error.request);
//       } else {

//         console.log("Error", error.message);
//       }
//       console.log(error.config);
    
            })
