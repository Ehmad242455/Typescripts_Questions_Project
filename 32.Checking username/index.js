let currentUser = ["EHmad", "AbduLlah", "SaLman", "Husnain", "Qazi"];
let newUser = ["EHmad", "Haider", "Asim", "Faizan", "Husnain"];
newUser.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUser.map(cUser => cUser.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is already available.Please write another username!`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
export {};
