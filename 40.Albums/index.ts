// Define the structure of the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
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
