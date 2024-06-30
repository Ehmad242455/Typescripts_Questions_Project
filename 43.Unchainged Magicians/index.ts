let magician:string[] = ["Harry Houdini","David Copperfield","Penn Jillette","David Blaine"];

function copyArray(array:string[]){
    return [...array]
}

function make_Great(magicianArray:string[]){
    for(let i = 0; i<magicianArray.length; i++){
        magician [i] = "The Great " + magicianArray[i] + "."
    }
}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}

const copyArr = copyArray(magician);


make_Great(copyArr);

console.log("\nThis is my orignal Array.");
show_magicians(copyArr);

console.log("\nThis is my modified copy Array.");
show_magicians(magician);