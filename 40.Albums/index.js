"use strict";
// Function to create an album object
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums
let album1 = make_album('The Beatles', 'Abbey Road');
let album2 = make_album('Pink Floyd', 'The Dark Side of the Moon');
let album3 = make_album('Michael Jackson', 'Thriller', 9);
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
