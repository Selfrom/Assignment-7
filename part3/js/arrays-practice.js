//STEP 1
var movies1 = ["A New Hope", "Gladiator", "Pirates of the Caribbean", "Up", "Spider-Man: Into the Spider-Verse"]
console.log(movies1[1]);
//STEP 2
var movies2 = new Array(5);
movies2[0] = "A New Hope";
movies2[1] = "Gladiator";
movies2[2] = "Pirates of the Caribbean";
movies2[3] = "Up";
movies2[4] = "Spider-Man: Into the Spider-Verse";
console.log(movies2[0]);
//STEP 3
var movies3 = new Array(5);
movies3[0] = "A New Hope";
movies3[1] = "Gladiator";
movies3[2] = "Pirates of the Caribbean";
movies3[3] = "Up";
movies3[4] = "Spider-Man: Into the Spider-Verse";
movies3.splice(2, 0, "Spider-Man: Across the Spider-Verse");
console.log(movies3.length);
//STEP 4
var movies4 = [];
movies4[0] = "A New Hope";
movies4[1] = "Gladiator";
movies4[2] = "Pirates of the Caribbean";
movies4[3] = "Up";
movies4[4] = "Spider-Man: Into the Spider-Verse";
delete movies4[0];
console.log(movies4);
//STEP 5
var movies5 = [];
movies5[0] = "A New Hope";
movies5[1] = "Gladiator";
movies5[2] = "Pirates of the Caribbean";
movies5[3] = "Up";
movies5[4] = "Spider-Man: Into the Spider-Verse";
movies5[5] = "Spider-Man: Across the Spider-Verse";
movies5[6] = "Jaws";
for (var i = 0; i < movies5.length; i += 1) {
  console.log(movies5[i]);
}
//STEP 6
var movies6 = [];
movies6[0] = "A New Hope";
movies6[1] = "Gladiator";
movies6[2] = "Pirates of the Caribbean";
movies6[3] = "Up";
movies6[4] = "Spider-Man: Into the Spider-Verse";
movies6[5] = "Spider-Man: Across the Spider-Verse";
movies6[6] = "Jaws";
for (index in movies6) {
  console.log(movies6[index]);
}
//STEP 7
var movies7 = [];
movies7[0] = "A New Hope";
movies7[1] = "Gladiator";
movies7[2] = "Pirates of the Caribbean";
movies7[3] = "Up";
movies7[4] = "Spider-Man: Into the Spider-Verse";
movies7[5] = "Spider-Man: Across the Spider-Verse";
movies7[6] = "Jaws";
for (index in movies7.sort()) {
  console.log(movies7[index]);
}
//STEP 8
var movies8 = [];
movies8[0] = "A New Hope";
movies8[1] = "Gladiator";
movies8[2] = "Pirates of the Caribbean";
movies8[3] = "Up";
movies8[4] = "Spider-Man: Into the Spider-Verse";
movies8[5] = "Spider-Man: Across the Spider-Verse";
movies8[6] = "Jaws";
var leastFavMovies = [];
leastFavMovies[0] = "Cats";
leastFavMovies[1] = "The Purge";
leastFavMovies[2] = "The Exorcist";
var outputString = "\nMovies I like:\n\n"
for (var i = 0; i < movies8.length; i += 1) {
  outputString += movies8[i] + "\n";
}  
outputString += "\nMovies I regret watching: \n\n";
for (var i = 0; i < leastFavMovies.length; i += 1) {
  outputString += leastFavMovies[i] + "\n";
}
console.log(outputString);
//STEP 9
var movies9 = [];
movies9[0] = "A New Hope";
movies9[1] = "Gladiator";
movies9[2] = "Pirates of the Caribbean";
movies9[3] = "Up";
movies9[4] = "Spider-Man: Into the Spider-Verse";
movies9[5] = "Spider-Man: Across the Spider-Verse";
movies9[6] = "Jaws";
var leastFavMovies = [];
leastFavMovies[0] = "Cats";
leastFavMovies[1] = "The Purge";
leastFavMovies[2] = "The Exorcist";
movies9 = movies9.concat(leastFavMovies);
for (index in movies9.sort().reverse()) {
  console.log(movies9[index]);
}
//STEP 10
var movies10 = [];
movies10[0] = "A New Hope";
movies10[1] = "Gladiator";
movies10[2] = "Pirates of the Caribbean";
movies10[3] = "Up";
movies10[4] = "Spider-Man: Into the Spider-Verse";
movies10[5] = "Spider-Man: Across the Spider-Verse";
movies10[6] = "Jaws";
var leastFavMovies = [];
leastFavMovies[0] = "Cats";
leastFavMovies[1] = "The Purge";
leastFavMovies[2] = "The Exorcist";
movies10 = movies10.concat(leastFavMovies);
console.log(movies10.sort().reverse().pop());
