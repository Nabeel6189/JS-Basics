//Function declarations are scanned and made available to the whole code

//Variable declarations are scanned and made undefined

//Function username has a variable declared inside 
username();

//The variable 'names' is declared after the console log
console.log(names);

var names = 'nabeel';

function username (){
    var names = 5;
    console.log(names);
}

//Here the console log prints the variable that is declared globally
console.log(names);



//This is a variable defined as a function, so when it is called before declaration, it will be errored
//This will be treated as a variable
username1();

var names1 = 'nabeel';

var username1 = function (){
    //var names1 = 5;
    console.log(names1);
}




