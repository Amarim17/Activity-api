var axios = require("axios");
var inquirer = require("inquirer");
var CFonts = require("cfonts");

inquirer
.prompt([
{
    type: "input",
    message: CFonts.say("Hey, What's Your Name?", {
        font: "console",
        align: "center"
    }),
    name: "name"
}
]).then(function(inquirerResponse) {
    console.log("\n")
    CFonts.say("------------------------------", {
        align: "center"
    })
    CFonts.say("Welcome To Bored API|" + inquirerResponse.name, {
        font: "block",
        align: "center",
    });
    CFonts.say("In this application you are able to find activities near you|by just providing an address and|the type of activity which you are looking to do.|~", {
        font: "console",
        align: "center"
    })
    CFonts.say("------------------------------", {
        align: "center"
    })


    inquirer
    .prompt([
            {
                type: "input",
                message: CFonts.say("Please input your address", {
                    align: "center",
                    font: "console"
                }),
                name: "address"
            }
    ])
    .then(function(inquirerResponse) {
        var location = inquirerResponse.address
        var replaced = location.split(' ').join('%20');
        var queryUrl2 = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + replaced + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDq6fJPj-CEGwnp4dUvWQdzUGjQ2P-co1A";

        axios.get(queryUrl2).then(function(response) {
                CFonts.say(response.data.candidates[0].formatted_address, {
                    align: "center",
                    font: "console"
                });
        })
            inquirer
            .prompt([
                {
                    type: "confirm",
                    message:CFonts.say("Is this the correct address?", {
                        align: "center",
                        font: "console"
                    }),
                    name: "confirmAddress"
                }
            ])
            .then(function(response) {
                if(response.confirmAddress) {
                    inquirer
                    .prompt([
                    {
                    type: "list",
                    message: CFonts.say("What type of activity would you like to do?", {
                        align: "center",
                        font: "console"
                    }),
                    choices: ['charity', 'cooking', 'music', 'diy', 'education', 'social', 'busywork', 'recreational', 'relaxation'],
                    name: "type"
                    }
                    ])
                    .then(function(inquirerResponse) {
                        var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + inquirerResponse.type;
                        var userChoice = inquirerResponse.type;

                        axios.get(queryUrl1).then(
                        function(response) {
                            CFonts.say("Activity", {
                                align: "center",
                                font: "console"
                            })
                            CFonts.say("" + response.data.activity + "!!", {
                                align: "center",
                                font: "console"
                            });
                            if (response.data.participants = 1) {
                                CFonts.say("This activity requires " + response.data.participants + " person", {
                                    align: "center",
                                    font: "console"
                                })
                            }
                            else {
                                CFonts.say("This activity requires at least " + inquirerResponse.data.participants + " people", {
                                    align: "center",
                                    font: "console"
                                })
                            }
                            CFonts.say("The type of activity is " + response.data.type, {
                                align: "center",
                                font: "console"
                            });
                            reRoll(userChoice)
                        })
                            
                    })
                }
                else {
                    mainQuestion();
                    }
            })
    })

})

//Functions
function mainQuestion(){
    inquirer
    .prompt([
        {
            type: "input",
            message: CFonts.say("Please re-input your address", {
                align: "center",
                font: "console"
            }),
            name: "address"
        }
    ])
    .then(function(inquirerResponse) {
        var location = inquirerResponse.address
        var replaced = location.split(' ').join('%20');
        var queryUrl2 = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + replaced + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDq6fJPj-CEGwnp4dUvWQdzUGjQ2P-co1A";

        axios.get(queryUrl2).then(
            function(response) {
                CFonts.say("   " + response.data.candidates[0].formatted_address, {
                    align: "center",
                    font: "console"
                });

                inquirer
                .prompt([
                    {
                        type: "confirm",
                        message: CFonts.say("Is this the correct address?", {
                            align: "center",
                            font: "console"
                        }),
                        name: "yesNo",
                        default: true
                    }
                ]).then(function(inquirerResponse) {

                    if(inquirerResponse.yesNo) {
                        inquirer
                        .prompt([
                        {
                        type: "list",
                        message: CFonts.say("What type of activity would you like to do?", {
                            align: "center",
                            font: "console"
                        }),
                        choices: CFonts.say(['charity', 'cooking', 'music', 'diy', 'education', 'social', 'busywork', 'recreational', 'relaxation'], {
                            align: "center",
                            font: "console"
                        }),
                        name: "type"
                        }
                        ])
                        .then(function(inquirerResponse) {
                            var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + inquirerResponse.type;
                            userChoice = inquirerResponse.type;
                            axios.get(queryUrl1).then(
                            function(response) {
                                CFonts.say("Activity", {
                                    align: "center",
                                    font: "console"
                                })
                                CFonts.say("" + response.data.activity + "!!", {
                                    align: "center",
                                    font: "console"
                                });
                                if (response.data.participants = 1) {
                                    CFonts.say("This activity requires " + response.data.participants + " person", {
                                        align: "center",
                                        font: "console"
                                    })
                                }
                                else {
                                    CFonts.say("This activity requires at least " + inquirerResponse.data.participants + " people", {
                                        align: "center",
                                        font: "console"
                                    })
                                }
                                CFonts.say("The type of activity is " + response.data.type, {
                                    align: "center",
                                    font: "console"
                                });
                                reRoll(userChoice)
                            })
                                
                        })

                    } else {
                        CFonts.say("Something went wrong, please run again and try another address", {
                            align: "center",
                            font: "console"
                        })
                    }

                })

            }
        )
    })
}

function reRoll(userActivity) {
    inquirer
    .prompt([
        {
            type: "confirm",
            message: CFonts.say("Would you like to try another activity in the same category?", {
                align: "center",
                font: "console"
            }),
            name: "tryAgain"
        }
    ]).then(function(inquirerResponse) {
        if(inquirerResponse.tryAgain) {
            var queryUrl1 = "http://www.boredapi.com/api/activity?type=" + userActivity;

        axios.get(queryUrl1).then(
            function(response) {
                CFonts.say("Activity", {
                    align: "center",
                    font: "console"
                })
                CFonts.say("" + response.data.activity + "!!", {

                    align: "center",
                    font: "console"
                });
                if (response.data.participants = 1) {
                    CFonts.say("This activity requires " + response.data.participants + " person", {
                        align: "center",
                        font: "console"
                    })
                }
                else {
                    CFonts.say("This activity requires at least " + inquirerResponse.data.participants + " people", {
                        align: "center",
                        font: "console"
                    })
                }
                CFonts.say("The type of activity is " + response.data.type, {
                    align: "center",
                    font: "console"
                });
                CFonts.say("We Hope You Enjoyed|Doing these|Activities", {
                    align: "center"
                })
            })
        }
        else{
            mainQuestion()
            CFonts.say("We Hope You Enjoyed Doing these Activities")
        }
        
    })
}