import inquirer from "inquirer";
import chalk from "chalk";
let todo_list = [];
let while_loop = true;
while (while_loop === true) {
    //......option.....
    let option = await inquirer.prompt([
        {
            name: "user_option",
            type: "list",
            message: chalk.yellow.bold("\nEnter an option:"),
            choices: ["add", "remove"]
        }
    ]);
    //.......Add.......
    if (option.user_option === "add") {
        let ans = await inquirer.prompt([
            {
                name: "usr_ans",
                type: "input",
                message: chalk.green("\nwrite something to add in the task list:\n")
            }
        ]);
        if (ans.usr_ans !== "") {
            todo_list.push(ans.usr_ans);
            console.log(todo_list);
        }
        else {
            console.log(chalk.red.bold("\nplease write somthing to add in the todo list\n"));
        }
    }
    //......remove......
    else if (option.user_option === "remove") {
        let removeChoice = await inquirer.prompt([
            {
                name: "remove_item",
                type: "input",
                message: chalk.red.bold("\nselect item to remove :\n"),
                choices: todo_list
            }
        ]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log(chalk.yellow.bold(`\n\nyou remove :\n`, removeChoice.remove_item));
            console.log(chalk.green(todo_list));
        }
    }
    //.......confirm......
    let user_ans = await inquirer.prompt([{
            name: "selection",
            type: "confirm",
            message: chalk.red.bold("\nDo you want to continue?"),
            default: true,
        }]);
    if (user_ans.selection === false) {
        while_loop = false;
    }
}
console.log(chalk.blue.bold("\nThanks you for useing to do list!\n"));
