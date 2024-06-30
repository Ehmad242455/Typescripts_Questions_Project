"use strict";
function make_shirt(size = "Large", text = "I Love Typescripts.") {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt("Meduim");
make_shirt("Small", "I love Javascripts.");
