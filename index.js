#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowtitle = chalkAnimation.rainbow("lets Start Calculation");
    await sleep();
    rainbowtitle.stop();
    console.log(chalk.yellow(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
}
await Welcome();
async function askquestion() {
    const answers = await inquirer.prompt([
        /* pass Your Question in here*/
        {
            type: "list",
            name: "operator",
            message: chalk.greenBright("which operation You want to perform?"),
            choices: ["addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2: ",
        },
    ]);
    if (answers.operator == "addition") {
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.red(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
async function startagain() {
    await askquestion();
    var again = await inquirer.prompt({
        type: "input",
        name: "restart",
        message: "Do You Want to Continue? Press Y or N: ",
    });
    if (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES" ||
        again.restart == "yES" ||
        again.restart == "yeS" ||
        again.restart == "Yes") {
        startagain();
    }
    else if (again.restart == "n" ||
        again.restart == "N" ||
        again.restart == "no" ||
        again.restart == "NO" ||
        again.restart == "nO" ||
        again.restart == "No") {
        console.log("Closed");
    }
    else {
        console.log("Your Answer is Incorrect Please Input => ('Y' or 'N'). Your calculator has reopened.\n");
        startagain();
    }
}
startagain();
