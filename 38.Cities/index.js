"use strict";
function describe_city(city, country = "Default Country.") {
    console.log(`${city} is the city of ${country}`);
}
describe_city("Gujranwala", "Pakistan.");
describe_city("Tokyo", "Japan.");
describe_city("Paris");
