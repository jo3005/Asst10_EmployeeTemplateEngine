const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
//const fs = require("fs");
let data_results=[];
let more_employees='Hallibut';



const data_results_temp=
  [
    Manager {
      name: 'Fred Boss',
      id: 'fred@email.com',
      email: '51',
      role: 'Manager',
      officeNumber: '0892770900'
    },
    Engineer {
      name: 'Joe Engine',
      id: '36',
      email: 'joe@email.com',
      role: 'Engineer',
      github: 'jotheman'
    },
    Intern {
      name: 'Coffee Boy',
      id: '9008',
      email: 'coffee@email.com',
      role: 'Intern',
      school: 'Barista High'
    },
    Engineer {
      name: 'Jane theWiz',
      id: '86',
      email: 'jane@email.com',
      role: 'Engineer',
      github: 'janeWiz'
    }
  ]


console.log("Please build your team.");

function getPersonData(){
    const doMore="No";
    more_employees="Hallibut";
    inquirer.prompt([
        {   type: "input",
            message: "Enter the person's name:",
            name: "name",
            default: "Fred Boss"
        },
        {   type: "input",
            message: "Enter their employee id:",
            name: "id",
            default: "51"
        },
        {   type: "input",
            message: "Enter their email address:",
            name: "email",
            default: "fred@email.com"
        },
        {
            type: "list",
            message: "What type of role does the person have?",
            name: "role",
            choices:["Manager",
                    "Engineer",
                    "Intern"],
            default: "Engineer"
        },
        {
            type: "input",
            message: "Enter the Manager's office number:",
            name: "officeNumber",
            when: function(answers){
                return(answers.role==="Manager")
            }
        },
        {
            type: "input",
            message: "Enter their github account id:",
            name: "github",
            when: function(answers){
                return(answers.role==="Engineer")
            }
        },
        {
            type: "input",
            message: "What school do they attend?",
            name: "school",
            when: function(answers){
                return(answers.role==="Intern")
            }
        },
        {
            type: "list",
            message: "Do you want to enter another employee?",
            name: "more",
            choices: ["Yes", "No"],
            default: "Yes"
        }
    ])
    .then(data => {
        
        data_results.push(data);
        if (data.more !=='Yes') { 
            return data_results;
        } else {
            getPersonData();
        }
        
    })
    .then(response => {
        if(response!== undefined) {
            //console.log(response);
            const persons=[];
            response.forEach(person => {
                switch(person.role){
                    case "Manager":
                        const newManager= new Manager(person.name, person.email, person.id,person.officeNumber);
                        persons.push(newManager);
                        break;
                    case "Engineer":
                        const newEngineer = new Engineer(person.name, person.email,person.id, person.github);
                        persons.push(newEngineer);
                        break;
                    case "Intern":
                        const newIntern = new Intern(person.name, person.id, person.email, person.school);
                        persons.push(newIntern);
                        break;
                    default:
                        const newEmployee= new Employee(person.name,person.id, person.email);
                        persons.push(newEmployee);
                        break;
                    };
                    
            })
            //console.log(persons);
            return persons;
        }  
    })
    .then(team => {

    });   
}
getPersonData();

