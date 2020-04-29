// define and export the Engineer class. Inherits from Employee.
const Employee = require ("./Employee");

class Engineer extends Employee{
    constructor (name, email, id, github_username){
        super(name,id,email);
        this.github=github_username;
        this.role="Engineer";
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        //included because the instructions said so.
        return this.role;
    }

}

module.exports = Engineer;