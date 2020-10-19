const Manager = require('../lib/Manager');
// const Employee = require('../lib/Employee')
//create office number
test('can set office number via constructor', () => {
    const offNum = '100';
    const emp = new Manager('Paris', 1, 'test@test.com', offNum);
    expect(emp.officeNumber).toBe(offNum);
});
//get officer number via getOfficeNumber test
test('can get office number via getOfficeNumber', () => {
    const officeNumber = '100';
    const emp = new Manager('Paris', 1, 'test@test.com', officeNumber);
    expect(emp.getOfficeNumber()).toBe(100);
});
//getRole return manager
test('can getRole return manager', () => {
    const testRole = 'Manager';
    const emp = new Manager('Paris', 1, 'test@test.com', 100);
    expect(emp.getRole()).toBe(testRole);
});
//getRole return manager
test('getRole return manager', () => {
    const testMan = 'Manager';
    const emp = new Manager('Paris', 1, 'test@test.com', 100);
    expect(emp.getRole()).toBe(testMan);
});