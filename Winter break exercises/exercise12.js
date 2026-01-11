//1st way with function constructor
function FavoriteMovie(title, year, genres){
    this.title = title;
    this.year = year;
    this.genres = genres;
}
let myFavoriteMovie = new FavoriteMovie("Social network", 2010, ["Comedy", "Documentary", "Sci-Fi", "Action"]);

myFavoriteMovie.genres.push("Thriller");

console.log(`My favorite movie is ${myFavoriteMovie.title}, released in ${myFavoriteMovie.year}.`); 



//2nd way with object literal
/*let favoriteMovie = {
  title: "Social network",
  year: 2010,
  genres: ["Comedy", "Documentary", "Sci-Fi", "Action"]
};

favoriteMovie.genres.push("Thriller");

console.log(`My favorite movie is ${favoriteMovie.title}, released in ${favoriteMovie.year}.`); */