let guestList:string[] = ["Bob","King","Paul"];


let absantGuest:string = "Bob";
let newGuest:string = "Law";

guestList[0] = newGuest;

guestList.unshift("Armor King");

guestList.splice(2,0,"Eddy");

guestList.push("Lee");

//for(let i=0; i<guestList.length; i++ ){
    //console.log("Dear Mr. " + guestList[i] +  ",\nIt is our pleasure to invite you in our party.\nThank you!\n")
//}

//console.log("\nWe can not arrange big table, Only two peoples are invited.");

while(guestList.length>2){
    let removeGuests = guestList.pop();
    //console.log(`Sorry Mr. ${removeGuests}, You are not invited for Dinner.\n`);
}
/*for(let i=0; i<guestList.length; i++ ){
    console.log("Dear Mr. " + guestList[i] +  ",\nYou are still invited.\nThank you!\n")
};*/

guestList.splice(0,2);

//exercise no 19

console.log(`Total number of Guest are: ${guestList.length}`);
