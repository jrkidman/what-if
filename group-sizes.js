/*## `group-sizes.js`

Lets say we have a class of students that we want to separate into groups of three. Inevitably, if there are leftover 
students, we may need to have some groups of two. A group of one is not something that we want.

**Example 1:** if we have a class size of 15, we would create 5 groups of 3 and 0 groups of 2 
**Example 2:** if we have a class size of 16, we would create 4 groups of 3 and 2 groups of 2
**Example 3:** if we have a class size of 17, we would create 5 groups of 3 and 1 group of 2

Write a program that prompts the user for a class size, then logs out the number of groups of 3 the number of groups of 
2 that the class would be divided into.

condition 1- divides into 3 (size/3)
condition 2- has one left over (subtract 4, divide by 3, then 2 groups of 2)
condition 3- has two left over (subtract 2, divide by 3, then 1 group of 2)

*/

const prompt = require('prompt-sync')();

let size = Number(prompt("Enter the class size: "));

if (size % 3 === 0){
    console.log("You will have " + size/3 + " groups of 3.");
}
else if (size % 3 === 1){
    console.log("You will have " + (size - 4)/3 + " groups of 3 and 2 groups of 2.");
}
else if (size % 3 === 2){
    console.log("You will have " + (size - 2)/3 + " groups of 3 and one group of 2.")
}