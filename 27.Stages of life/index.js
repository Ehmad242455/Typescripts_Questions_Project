"use strict";
let age = 69;
if (age < 2) {
    console.log("The person is baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person ia an adult.");
}
else {
    console.log("The person is an elder.");
}
