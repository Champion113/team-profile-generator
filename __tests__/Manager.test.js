const Manager = require('../lib/Manager');
 const Employee = require('../lib/Employee')
//create office number
test('can set office number via constructor', () => {
    const offNum = 100;
    const emp = new Manager('Paris', 1, 'test@test.com', offNum);
    expect(emp.officeNumber).toBe(offNum);
    test("Can get office number via getOffice()", () => {
        const testValue = 100;
        const e = new Manager("Foo", 1, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
      });
//getRole return manager
test('can getRole return manager', () => {
    const testRole = 'Manager';
    const emp = new Manager('Paris', 1, 'test@test.com', 100);
    expect(emp.getRole()).toBe(testRole);
});})
