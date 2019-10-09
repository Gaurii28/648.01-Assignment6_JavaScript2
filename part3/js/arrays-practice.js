//STEP 1
window.console.log("\n STEP 1");
var favMovies =["Intersteller","Life As We Know It","2 States","Safe Haven","The Lucky One"];
window.console.log("second favourite movie is : "+favMovies[1] + ". /n");

//STEP 2
window.console.log("\n STEP 2");
var movies=new Array(5);
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
window.console.log("First favourite movie is : "+favMovies[0] + ". /n");
//STEP 3
window.console.log("\n STEP 3");
var movies=new Array(5);
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies.splice(2,0,"Crazy Rich Asians");
window.console.log("length of an array is: "+movies.length +"\n");

//STEP 4
window.console.log("\n STEP 4");
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
delete movies[0];
window.console.log(movies);
window.console.log("\n");

//STEP 5
window.console.log("\n STEP 5");
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";
for(var i =0 ; i<movies.length; i ++){
    window.console.log("Fav movie " +(i+1)+" is "+movies[i] + ". \n");
}

//STEP 6
window.console.log("\n STEP 6");
var movies = [];
var i;
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";
for(i in movies){
    window.console.log(movies[i] + ". \n");
}

//STEP 7
window.console.log("\n STEP 7");
var movies = [];
var i;
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";
movies.sort();
for(i in movies){
    window.console.log(movies[i] + ". \n");
}
//STEP 8
window.console.log("\n STEP 8");
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";

leastFavMovies=["The Crush","Gone Girl","Insidious"];
window.console.log("Movies i like:  \n ");
for(var i =0 ; i<movies.length; i ++){
    window.console.log(movies[i] + "\n");
}
window.console.log(" \n Movies i regret watching:  \n ");
for(var i =0 ; i<leastFavMovies.length; i ++){
    window.console.log(leastFavMovies[i] + "\n");
}
//STEP 9
window.console.log("\n STEP 9");
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";

leastFavMovies=["The Crush","Gone Girl","Insidious"];

movies = movies.concat(leastFavMovies);
movies.sort();
for(var i= movies.length-1 ; i>=0;i--){
    window.console.log(movies[i] + "\n");
}

//STEP 10
window.console.log("\n STEP 10");
var movies = [];
movies[0]="Intersteller";
movies[1]="Life As We Know It";
movies[2]="2 States";
movies[3]="Safe Haven";
movies[4]="The Lucky One";
movies[5]="Notebook";
movies[6]="Social Networking";

leastFavMovies=["The Crush","Gone Girl","Insidious"];

movies = movies.concat(leastFavMovies);
movies.sort();
for(var i=movies.length-1 ; i>=0;i--){
    window.console.log(movies[i] + "\n");
}
window.console.log("last item in array is :"+ movies[movies.length-1] + "\n");
movies.length=movies.length-1;



