const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('can get name via getName', () =>{
    const testName = 'Paris';
    const emp = new Employee (testName)
    expect(emp.getName()).toBe(testName);
})

