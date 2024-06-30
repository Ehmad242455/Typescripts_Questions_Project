"use strict";
let guestList = ["Bob", "King", "Paul"];
let absantGuest = "Bob";
let newGuest = "Law";
guestList[0] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite our party.\nThank you!\n");
}
console.log(`Mr. ${absantGuest} is not coming on party!`);
