// Define and export the Employee class

class Employee {
    constructor (name,email,id,boss_id){
        this.name=name;
        this.email=email;
        this.id=id;
        this.role="Employee";
        //this.boss_id=boss_id;
    }

    getName(){
        return this.name;
    }

    getEmail() {
        return this.email;
    
    }
    getID() {
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