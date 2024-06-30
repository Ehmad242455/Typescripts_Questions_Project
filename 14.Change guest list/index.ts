let guestList:string[] = ["Bob","King","Paul"];


let absantGuest:string = "Bob";
let newGuest:string = "Law";

guestList[0] = newGuest;

for(let i=0; i<guestList.length; i++ ){
    console.log("Dear Mr. " + guestList[i] +  ",\nIt is our pleasure to invite our party.\nThank you!\n")
}

console.log(`Mr. ${absantGuest} is not coming on party!`);