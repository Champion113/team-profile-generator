const Engineer = require('../lib/Engineer.js');
//create github username test
test('create github username', () => {
    const githubUser = "username";
    const emp = new Engineer('Paris', 1, 'test@test.com', githubUser);
    expect(emp.github).toBe(githubUser);
});
//get github username via getGithub test
test('can get github username via getGithub', () => {
    const githubUser = "username";
    const emp = new Engineer('Paris', 1, 'test@test.com', githubUser);
    expect(emp.getGithub()).toBe(githubUser);
});
//getRole return engineer
test('can getRole return Engineer', () => {
    const testRole = 'Engineer';
    const emp = new Engineer('Paris', 1, 'test@test.com', 'username');
    expect(emp.getRole()).toBe(testRole);
});