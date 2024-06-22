import inquirer from "inquirer";
const systemGeneratedno = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your Guess b/w 1 to 10:"
    }
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedno) {
    console.log(userGuess, "userGuess", systemGeneratedno, "SYs");
    console.log("yaaaa your answer is correct \n you win!");
}
else {
    console.log("please try again better luck next time!");
}
