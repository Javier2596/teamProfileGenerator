const inquirer = require('inquirer');
const fs = require('fs');


class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

Employee.prototype.getName = function () {
    if(this.role === "Manager") {

    }
}

function getId() {

}

function getEmail() {

}

Employee.prototype.getRole = function () {
    if(this)


class Manager {
    constructor(role, officeNumber) {
        this.role = role;
        this.officeNumber = officeNumber;
    }
}

class Engineer { 
    constructor(role, github) {
        this.role = role;
        this.github = github;
    }
}

class Intern {
    constructor(role, school) {
        this.role = role;
        this.role = school;  
    }
}
}
module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;