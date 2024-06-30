function sandwich(item) {
    console.log("=====================");
    console.log("\nMaking your sandwich with:");
    item.forEach(element => {
        console.log("- " + element);
    });
    console.log("Enjoy your sandwiches ! \n");
    console.log("=====================");
}
sandwich(["Ham", "Cheese", "Lettuce"]);
sandwich(["Bacon", "Turkey"]);
sandwich(["Peanut Butter", "Jelly"]);
export {};
