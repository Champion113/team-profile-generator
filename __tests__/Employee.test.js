const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

//set name test
test('can set name', () => {
    const testName = 'Paris';
    const emp = new Employee(testName)
    expect(emp.getName).toBe(testName);
})
//set email
test('can set email', () => {
    const testEmail = 'test@test.com';
    const emp = new Employee('email', 1, testEmail);
    expect(emp.email).toBe(testEmail);
})
//set id
test('can set id', () => {
    const testId = '1';
    const emp = new Employee('id', testId);
    expect(emp.id).toBe(testId);
})

//get name test
test('can get name via getName', () => {
    const testName = 'Paris';
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
})
//get Email test
test('can get email via getEmail', () => {
    const testEmail = 'test@test.com';
    const emp = new Employee('email', 1, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
})
//get Id test
test('can get id via getId', () => {
    const testId = '1';
    const emp = new Employee('id', testId);
    expect(emp.getId()).toBe(testId);
})

//getRole returns employee test
test('can get role via getRole', () => {
    const testRole = 'Employee';
    const emp = new Employee('Paris', 1, 'test@test.com');
    expect(emp.getRole()).toBe(testRole);
})


