import Employee from "./Employee.js";

class Manager extends Employee {
    constructor (data) {
        super(data.name, data.id, data.email);

        this.officeNumber = data.officeNumber;
    }
};

export default Manager;