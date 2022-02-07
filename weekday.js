/*## `weekday.js`

Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

| number | day |
| --- | --- |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |
| 7 | Sunday |
| anything else | "error" |*/

const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number between 1 and 7: "));

if (num === 1){
    console.log("Today is Monday.");
}else if (num === 2){
    console.log("Today is Tuesday.");
}else if (num === 3){
    console.log("Today is Wednesday.");
}else if (num === 4){
    console.log("Today is Thursday.");
}else if (num === 5){
    console.log("Today is Friday.");
}else if (num === 6){
    console.log("Today is Saturday.");
}else if (num === 7){
    console.log("Today is Sunday.");
}else {
    console.log("Error");
}