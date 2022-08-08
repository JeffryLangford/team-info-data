import Employee from "./Employee.js";

class Intern extends Employee {
    constructor (data) {
        super(data.name, data.id, data.email);

        this.school = data.school;
    }
};

export default Intern;