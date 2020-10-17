const Player = require('../lib/Manager');
//create school test
test('can set school via constructor', () => {
    const test = "username";
    const employee = new Engineer('Paris', 1, 'test@test.com', githubUser);
    expect(emp.github).toBe(githubUser);
});
//get github username via getGithub test
test('can get github username via getGithub', () => {
    const githubUser = "username";
    const employee = new Engineer('Paris', 1, 'test@test.com', githubUser);
    expect(emp.getGithub()).toBe(githubUser);
});
//getRole return engineer
test('can getRole return Engineer', () => {
    const testRole = 'Engineer';
    const emp = new Engineer('Paris', 1, 'test@test.com', 'username');
    expect(emp.getRole()).toBe(testRole);
});