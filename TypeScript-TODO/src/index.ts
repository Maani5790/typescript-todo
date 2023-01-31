#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let animation = chalkAnimation.rainbow("Welcome to TODO CLI:");
    await runAnimation();

    animation.stop();
};

await welcome();

let todos: string[] = [];
let loop = true;

while (loop) {

    interface myTodo {
        TODO: string;
        addTODO: boolean;
    }

    const answer: myTodo = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "Enter The TODO Value: \n"
        },
        {
            name: "addTODO",
            type: "confirm",
            message: "Enter The More TODO Value: \n",
            default: false
        }
    ]);

    const { TODO, addTODO } = answer;

    loop = addTODO;

    if (TODO) {
        todos.push(TODO);
    } else {
        console.log(chalk.red("Kindly Enter Valid Input!"));
    }

};

if (todos.length > 0) {
    console.log(chalk.magenta("Your TODO's:"));

    todos.forEach(todo => {
        console.log(chalk.cyan(todo));
    });
} else {
    console.log(chalk.red("No TODO's Found!"));
};