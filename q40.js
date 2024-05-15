//Define the make album_function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Umer", "album title1");
var album2 = make_album("Usman", "album title2");
var album3 = make_album("Nushad", "album title", 10);
console.log(album1);
console.log(album2);
console.log(album3);
