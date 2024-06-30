let magician:string[] = ["Harry Houdini","David Copperfield","Penn Jillette","David Blaine"];

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
make_Great(magician)
show_magicians(magician);