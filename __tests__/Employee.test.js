const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

//set name test
test('can set name', () => {
    const name = 'Paris';
    const emp = new Employee(name)
    expect(emp.name).toBe(name);
})
//set email
test('can set email', () => {
    const testEmail = 'test@test.com';
    const emp = new Employee('Ava', 1, testEmail);
    expect(emp.email).toBe(testEmail);
})
//set id
test('can set id', () => {
    const testId = '1';
    const emp = new Employee('Ava', 1);
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
    const emp = new Employee('Ava', 1, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
})
//get Id test
test('can get id via getId', () => {
    const testId = '1';
    const emp = new Employee('Ava', testId);
    expect(emp.getId()).toBe(testId);
})

//getRole returns employee test
test('can get role via getRole', () => {
    const testRole = 'Employee';
    const emp = new Employee('Paris', 1, 'test@test.com');
    expect(emp.getRole()).toBe(testRole);
})


