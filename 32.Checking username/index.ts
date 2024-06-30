let currentUser:string[] = ["EHmad","AbduLlah","SaLman","Husnain","Qazi"];

let newUser:string[] = ["EHmad","Haider","Asim","Faizan","Husnain"];

newUser.forEach(newUsername =>{
    let lowerCase: string = newUsername.toLowerCase();
    if(currentUser.map(cUser => cUser.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is already available.Please write another username!`);
    }else{
        console.log(`The username ${newUsername} is available.`);
    }
})

