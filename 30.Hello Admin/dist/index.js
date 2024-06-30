let userName = ["Admin", "Motu", "Patlu", "Sweety", "Abdullah"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report? ");
    }
    else {
        console.log(`Hello ${userName[i]}, Thank you for logging in again.`);
    }
}
export {};
