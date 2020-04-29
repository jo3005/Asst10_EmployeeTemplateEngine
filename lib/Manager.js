// define and export the Manager class. Inherits from Employee.
const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name,id,email,officeNumber){
        super(name, id, email);
        this.officeNumber=officeNumber;
        this.role="Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        //included because the instructions said so.
        return this.role;
    }

}

module.exports = Manager;