var inquirer = require("inquirer");


inquirer
        .prompt([ { type: "input",
                    message: "Hey, What's Your Name?",
                    name: "name1"
                }
        ])
        .then(function(inquirerResponse1){ 
            console.log("Welcome To Bored API, " + inquirerResponse1.name1)

            // goodbye questions

            inquirer
            .prompt([ {
                            type:"input",
                            message:"Are you still bored?",
                            name:"still"
                        }
            ])

            .then(function(inquirerResponse){
                if(inquirerResponse.still==="yes") {
                
                   inquirer
                    .prompt([
                         {  type:"input",
                         message:"Would you like to play again?",
                         name:"again"
                            } 
                    
                    ])
                    .then(function(inquirerResponse){ 
                        if(inquirerResponse.again==="yes"){
                            

                        console.log("Welcome To Bored API, " + inquirerResponse1.name1)

                             } })}
                else{ 
                    console.log("Okay! Have a nice day and go have some fun!")
            }
        })
    });