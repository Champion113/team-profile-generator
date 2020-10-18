const fs = require('fs');;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//  inquirer dependency install
const { prompt } = require('inquirer');
const path = require('path')

const outputPath = path.join(OUTPUT_DIR, "team.html")
const OUTPUT_DIR = path.resolve(__dirname, "output")


const team = [];

// array of questions for user
const managerQuestions = [
    {
        type: 'input',
        name: "name",
        message: "What is your employee's name?",
    },
    {
        type: 'input',
        name: "id",
        message: "What is your employee's id?",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your employee's email?",
    },
    {
        type: 'input',
        name: "officeNum",
        message: "What is your employee's office number?",
    }

];

const internQuestions = [
    {
        type: 'input',
        name: "name",
        message: "What is your employee's name?",
    },
    {
        type: 'input',
        name: "id",
        message: "What is your employee's id?",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your employee's email?",
    },
    {
        type: 'input',
        name: "school",
        message: "What is your employee's school?",
    }

];

const engineerQuestions = [
    {
        type: 'input',
        name: "name",
        message: "What is your engineer name?",
    },
    {
        type: 'input',
        name: "id",
        message: "What is your engineer id?",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your engineer email?",
    },
    {
        type: 'input',
        name: "officeNum",
        message: "What is your engineer's github?",
    }

];

function switchBoard() {
    prompt([{
        type: "list",
        name: "choice",
        message: "Would you like to add an employee?",
        choices: ["Manager", "Intern", "Engineer", "Done"]
    }]).then(function (answer) {
        switch (answer.choice) {
            case "Manager":
                askManager()
                break;
            case "Intern":
                askIntern()
                break;
            case "Engineer":
                askEngineer()
                break;
            default:
               buildTeam()
                break
        }
    })
}




    function askManager() {
        prompt(managerQuestions).then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            team.push(manager)
            switchBoard()
        })
    }

    function askIntern() {
        prompt(internQuestions).then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern)
            switchBoard()
        })
    }

    function askEngineer() {
        prompt(engineerQuestions).then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer)
            switchBoard()
        })
    }

function buildTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,)
}

  
