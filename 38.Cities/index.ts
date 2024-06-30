function describe_city(city:string , country:string = "Default Country."){
    console.log(`${city} is the city of ${country}`);
}

describe_city("Gujranwala","Pakistan.");
describe_city("Tokyo","Japan.");
describe_city("Paris");
