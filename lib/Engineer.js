// define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor (name, email, id, github_username){
        super(name, email, id);
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