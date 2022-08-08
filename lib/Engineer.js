import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor (data) {
        super(data.name, data.id, data.email);

        this.github = data.github;
    }
};

export default Engineer;