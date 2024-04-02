#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPinCode = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin code",
  type: "number",
});

if (pinAnswer.pin === myPinCode) {
  console.log("Correct pin code!!!");
}
let operationAns = await inquirer.prompt({
  name: "operation",
  message: "Please select options",
  type: "list",
  choices: ["Withdraw", "Check balance", "Deposit", "Fast Cash"],
});
console.log(operationAns);

//Withdraw
if (operationAns.operation === "Withdraw") {
  let amountAns = await inquirer.prompt({
    name: "Amount",
    message: "Enter your amount",
    type: "number",
  });
  if (amountAns.Amount <= myBalance) {
    myBalance -= amountAns.Amount;
    console.log("You have successfully withdrawed your amount!!!");
    console.log(`your remaining balance is:${myBalance}`);
  } else {
    console.log("Insufficient balance!");
  }
}

//Check balance
else if (operationAns.operation === "Check balance") {
  console.log(`Your current balance is: ${myBalance}`);
}
//Deposit
else if (operationAns.operation === "Deposit") {
  let depositAmount = await inquirer.prompt({
    name: "Amount",
    message: "Enter the amount you want to deposit",
    type: "number",
  });
  myBalance += depositAmount.Amount;
  console.log(`Your new balance is: ${myBalance}`);
}

//Fastcash
else if (operationAns.operation === "Fast Cash") {
  let fastAmount = await inquirer.prompt({
    name: "amount",
    message: "Please select the amount you want to withdraw",
    type: "list",
    choices: [
      "1000",
      "2000",
      "3000",
      "4000",
      "5000",
      "6000",
      "7000",
      "8000",
      "9000",
      "10000",
    ],
  });
  myBalance -= fastAmount.amount;
  console.log("You have successfully withdrawed your amount!!!");
  console.log(`Your remaining balance is:${myBalance}`)
}
