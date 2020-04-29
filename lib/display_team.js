const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputPath = path.join(OUTPUT_DIR,"team.html")
const render = require("./lib/htmlRenderer");


let team=[];
let team_default=
  [
    new Manager(
      name= 'Fred Boss',
      id= 'fred@email.com',
      email= '51',
      role= 'Manager',
      officeNumber= '0892770900'
    ),
   new Engineer(
      name= 'Joe Engine',
      id= '36',
      email= 'joe@email.com',
      role= 'Engineer',
      github= 'jotheman'
    ),
    new Intern(
      name= 'Coffee Boy',
      id= '9008',
      email= 'coffee@email.com',
      role= 'Intern',
      school= 'Barista High'
    ),
    new Engineer(
      name= 'Jane theWiz',
      id= '86',
      email= 'jane@email.com',
      role= 'Engineer',
      github= 'janeWiz'
    )
  ];

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
