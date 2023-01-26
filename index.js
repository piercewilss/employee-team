const Manager = require("./library/Manager")




const inquirer = require("inquirer")
var team = []

function userInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?"
        }
    ]
    ).then(function (data){
        //  console.log(data)
        const newManager = new Manager(
            data.name 
            
        )
        //  console.log(newManager)
        team.push(newManager) 
        addEmployee()
    })
}


function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "what kind of employee do you want to add?",
            choices: ["Engineer", "Intern", "Quit"]
        }
    ]).then (function (data) {
        console.log(data)
        
    })
}

userInfo()
