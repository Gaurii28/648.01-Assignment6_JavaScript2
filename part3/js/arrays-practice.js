//STEP 1
// var favMovies =["Intersteller","Life As We Know It","2 States","Safe Haven","The Lucky One"];
// window.console.log("second favourite movie is : "+favMovies[1] + ".");
// //STEP 2
// var movies=new Array(5);
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// window.console.log("First favourite movie is : "+favMovies[0] + ".");
// //STEP 3
// var movies=new Array(5);
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// window.console.log("First favourite movie is : "+favMovies[0] + ".");
// movies.splice(2,0,"Crazy Rich Asians");
// window.console.log(movies);
//STEP 4
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
delete movies[0];
window.console.log(movies);

//STEP 5
// var movies = [];
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// movies[5]="Notebook";
// movies[6]="Social Networking";
// for(var i =0 ; i<movies.length; i ++){
//     window.console.log(movies[i] + ". \n");
// }

//STEP 6
// var movies = [];
// var i;
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// movies[5]="Notebook";
// movies[6]="Social Networking";
// for(i in movies){
//     window.console.log(movies[i] + ". \n");
// }

//STEP 7
// var movies = [];
// var i;
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// movies[5]="Notebook";
// movies[6]="Social Networking";
// movies.sort();
// for(i in movies){
//     window.console.log(movies[i] + ". \n");
// }
//STEP 8
// var movies = [];
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// movies[5]="Notebook";
// movies[6]="Social Networking";

// leastFavMovies=["The Crush","Gone Girl","Insidious"];
// window.console.log("Movies i like:  \n ");
// for(var i =0 ; i<movies.length; i ++){
//     window.console.log(movies[i] + "\n");
// }
// window.console.log(" \n Movies i regret watching:  \n ");
// for(var i =0 ; i<leastFavMovies.length; i ++){
//     window.console.log(leastFavMovies[i] + "\n");
// }
//STEP 9
// var movies = [];
// movies[0]="Intersteller";
// movies[1]="Life As We Know It";
// movies[2]="2 States";
// movies[3]="Safe Haven";
// movies[4]="The Lucky One";
// movies[5]="Notebook";
// movies[6]="Social Networking";

// leastFavMovies=["The Crush","Gone Girl","Insidious"];
// // window.console.log("Movies i like:  \n ");
// // for(var i =0 ; i<movies.length; i ++){
// //     window.console.log(movies[i] + "\n");
// // }
// // window.console.log(" \n Movies i regret watching:  \n ");
// // for(var i =0 ; i<leastFavMovies.length; i ++){
// //     window.console.log(leastFavMovies[i] + "\n");
// // }
// window.console.log("\n");
// movies = movies.concat(leastFavMovies);
// movies.sort();
// for(var i=movies.length-1 ; i>=0;i--){
//     window.console.log(movies[i] + "\n");
// }

//STEP 10
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";

leastFavMovies=["The Crush","Gone Girl","Insidious"];
// window.console.log("Movies i like:  \n ");
// for(var i =0 ; i<movies.length; i ++){
//     window.console.log(movies[i] + "\n");
// }
// window.console.log(" \n Movies i regret watching:  \n ");
// for(var i =0 ; i<leastFavMovies.length; i ++){
//     window.console.log(leastFavMovies[i] + "\n");
// }
window.console.log("\n");
movies = movies.concat(leastFavMovies);
movies.sort();
for(var i=movies.length-1 ; i>=0;i--){
    window.console.log(movies[i] + "\n");
}
window.cosole.log("last item is : " +movies[length-1]);
movies.length=movies.length-1;



