// define and export the Intern class. Inherits from Employee.
const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school=school;
        this.role="Intern";
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        //included because the instructions said so.
        return this.role;
    }

}

module.exports = Intern;