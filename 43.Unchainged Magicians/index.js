let magician = ["Harry Houdini", "David Copperfield", "Penn Jillette", "David Blaine"];
function copyArray(array) {
    return [...array];
}
function make_Great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The Great " + magicianArray[i] + ".";
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyArr = copyArray(magician);
make_Great(copyArr);
console.log("\nThis is my orignal Array.");
show_magicians(copyArr);
console.log("\nThis is my modified copy Array.");
show_magicians(magician);
export {};
