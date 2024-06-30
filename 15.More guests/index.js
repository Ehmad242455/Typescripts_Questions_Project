"use strict";
let guestList = ["Bob", "King", "Paul"];
let absantGuest = "Bob";
let newGuest = "Law";
guestList[0] = newGuest;
console.log(`\nMr. ${absantGuest} is not coming on party!'`);
console.log("\nGood News! We find a big table.So, we are inviting three more guests.\n");
guestList.unshift("Armor King");
guestList.splice(2, 0, "Eddy");
guestList.push("Lee");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite our party.\nThank you!\n");
}
