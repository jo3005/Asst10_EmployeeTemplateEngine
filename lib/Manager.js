// define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor (name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber=officeNumber;
        this.role="Manager";
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