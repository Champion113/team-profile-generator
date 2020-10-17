const Engineer = require('../lib/Engineer.js');
//create github username test
test ('create github username', ()=> {
const githubUser = "username";
const employee = new Engineer('Paris', 1, 'test@test.com', githubUser);
expect(emp.github).toBe(githubUser);
});
//get github username via getGithub test
test ('can get github username', ()=> {
    const githubUser = "username";
    const employee = new Engineer('Paris', 1, 'test@test.com', githubUser);
    expect(emp.getGithub()).toBe(githubUser);
    });