let footer = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"
// ex 1
let multiArr = [[], [], []];

// ex 2
let multiArray = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];

console.log("EXERCISE 2");
console.log(multiArray);
console.log(footer);

// ex 3

console.log("EXERCISE 3");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log(footer);

// ex 4

let tableNum = +prompt("EXERCISE 4: \n Enter a number to show its multiplication table.");
let tableLength = +prompt("EXERCISE 4: \n Enter the length of multiplication table.");

console.log("EXERCISE 4");
console.log("Multiplication table of: ", tableNum);
console.log("Length:", tableLength);


for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNum} × ${i} = ${tableNum * i}`);
}

console.log(footer);

// ex 5

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("EXERCISE 5");
for (let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}
for (let i=0 ; i<fruits.length ; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`);
}
console.log(footer);

//ex 6
console.log("EXERCISE 6");

//a. counting

let result1 = "";
for (let i = 1; i <= 15; i++) {
    result1 += i;

    if (i !== 15) {
        result1 += ", ";
    }
}

console.log(`Counting: ${result1}`);

// b. reverse counting

let result2=""
for (let i=10; i>=1 ; i--){
    result2 += i;

    if (i !== 1) {
        result2 += ", ";
    }
}
console.log(`Reverse Counting: ${result2}`);

// c. even numbers

let result3=""
for (let i=0; i<=20 ; i+=2) {
    result3 += i;

    if (i!== 20) {
        result3 += ", ";
    }
}
console.log(`Even Numbers: ${result3}`);

// d. odd numbers

let result4=""
for (let i=1; i<=19; i+=2){
    result4 += i;
    if (i !== 19) {
        result4 += ", ";
    }
}
console.log(`Odd Numbers: ${result4}`);

// e. series 

let result5 = "";
for(let i=2; i<=20; i+=2){
    result5+= `${i}k`
    if (i!== 20) {
        result5+= ", ";
    }
}
console.log(`Series: ${result5}`);

console.log(footer);

// ex 7

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userChoice = prompt("EXERCISE 7: \n Welcome to ABC Bakery. What'd u like to order? \n [Our menu: cake, apple pie, cookie, chips, patties]").toLowerCase();

let flag=false;

for(let i=0; i< items.length; i++) {
    if (items[i] === userChoice) {
        alert(`${items[i]} is available at index ${i} at our bakery.`);
        flag= true;
        break
    }
}
if (flag==false) {
    alert(`We are sorry! ${userChoice} is not available at our bakery.`)
}

// ex 8
console.log("EXERCISE 8");

let num = [24, 53, 78, 91, 12];
console.log(`Array Items: ${num}`);

let largestNumber = num[0];

for(let i=0; i< num.length; i++){
    if (num[i]>largestNumber) {
        largestNumber=num[i]
    }
}
console.log(`Largest Number is: ${largestNumber}`);
console.log(footer);

// ex 9
console.log("EXERCISE 9");

let num1 = [24, 53, 78, 91, 12];
console.log(`Array Items: ${num1}`);

let smallestNumber = num1[0];

for(let i=0; i< num1.length; i++){
    if (num1[i]<smallestNumber) {
        smallestNumber=num1[i]
    }
}
console.log(`Smallest Number is: ${smallestNumber}`);
console.log(footer);


// ex10

console.log("EXERCISE 10");
for(let i=5; i<=100; i+=5){
    console.log(i);
}
