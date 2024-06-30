// Equality
console.log("Equality test with string: ","Apple" === "Apple");

//Inequality
console.log("Inequality test with string: ",("Apple" as string) != "Orange");

//lower case test
console.log("Lower Case function test: ", "PAUL".toLowerCase() === "paul")

// Numerical Equality test 
console.log("Equality test with number: ", 26 ===26);

// Numerical Inequality test 
console.log("Inequality test with number: ", (90 as number) != 80);

// Greater than test
console.log("Grater than test with number: ", 10 > 5);

// Less than test
console.log("Less than test with number: ", 5<10);

// Greater than and equal test
console.log("Greater than and equal test with number: ", 10>=10);

//less than and equal test 
console.log("Less than and equal test with number :", 5<=10);

//And operater test 
console.log("And operator test: ", 5 === 5 && 10 > 5);

// Or operator test
console.log("Or operator test: ", 5===5 || false);

// check whetheran item is in a array
const fruits:string[] = ["Grapes","Amrood","Lemon","Angeer"];
console.log('Test "Grapes" in the array: ', fruits.includes("Grapes"));

//check whetheran item is not a array
console.log('Testing "Apple" in the array: ',!fruits.includes("Apple"));

