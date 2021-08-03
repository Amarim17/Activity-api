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
                                            type: "confirm",
                                            message:" ",
                                            name: "confirmAddr"
                                        }
                                    ]).then(function(inquirerResponse) {
                                        if(inquirerResponse.confirmAddr) {
                                        activityFunc()
                                        inquirer
                                        .prompt([
                                            {
                                                type: "confirm",
                                                message: "Would you like to try another activity in the same category?",
                                                name: "reroll"
                                            }
                                        ]).then(function(inquirerResponse) {
                                            var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + inquirerResponse.type;
                                            var choices = inquirerResponse.type
                                    
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
                                                })
                                        })
                                        }


                                         else {
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
                                                                    activityFunc()
                        
                                                                } else {
                                                                    console.log("Something went wrong, please run again and try another address")
                                                                }
                        
                                                            })
                        
                                                            }
                                                        )
                            })
                                        }





                                    })

                                    }
                                )



    })
                        //-------------------------------------------------------------------//





    
            })




            //Functions

function activityFunc() {
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
        var choices = inquirerResponse.type

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
            })
    })
}