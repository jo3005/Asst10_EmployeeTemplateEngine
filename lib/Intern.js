// define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor (name, email, id, school){
        super(name, email, id);
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