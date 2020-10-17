class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return 'Employee';
    }
}
   // module.exports = Employee;
    module.exports = function(val1, val2) {
        if (val1 === val2) {
          return true;
        } else {
          return false;
        }
      };


