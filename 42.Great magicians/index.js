let magician = ["Harry Houdini", "David Copperfield", "Penn Jillette", "David Blaine"];
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
make_Great(magician);
show_magicians(magician);
export {};
