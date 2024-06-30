interface person {
    age: number,
    name: string,
    nationality: string,
    student: boolean
};

let person: person = {
    age: 15,
    name: "Ehmad Ali",
    nationality: "Pakistan",
    student: true
};
console.log(person);

interface car {
    maker: string,
    color: string,
    model: number,
    automatic: boolean
};

let car:car = {
    maker: "Toyota",
    color: "gray",
    model: 2024,
    automatic: true
};
console.log(car);
