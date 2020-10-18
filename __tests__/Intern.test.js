const Intern = require('../lib/Intern');

//create school
test('create school', () => {
    const testSchool = "Penn";
    const emp = new Intern('Paris', 1, 'test@test.com', testSchool);
    expect(emp.school).toBe(testSchool);
});
//get school via getSchool test
test('can get school via getSchool', () => {
    const testSchool = "Penn";
    const emp = new Intern('Paris', 1, 'test@test.com', testSchool);
    expect(emp.getSchool()).toBe(testSchool);
});
//getRole return Intern
test('getRole return school', () => {
    const testSchool = "Intern";
    const emp = new Intern('Paris', 1, 'test@test.com', "Penn");
    expect(emp.getSchool()).toBe(testSchool);
});