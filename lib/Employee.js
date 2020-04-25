// Define and export the Employee class

class Employee {
    constructor (name,id,email,boss_id){
        this.name=name;
        this.id=id;
        this.email=email;
        this.role="Employee";
        //this.boss_id=boss_id;
    }

    getName(){
        return this.name;
    }

    getEmail() {
        return this.email;
    
    }
    getId() {
        return this.id;
    }

    /* getBoss(){
        return this.boss_id;
    } */

    getRole(){
        return this.role;
    }

}

module.exports = Employee;