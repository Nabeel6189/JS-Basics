
var names = 'nabeel';

username();

function username (){
    var names = 5;
    console.log(names);
    newUser();

    //This functions will take the value from the outer function, if the outer function does not have a variable, then it will search globally
    function newUser (){
        console.log(names);
    }
}

//Here the console log prints the variable that is declared globally
console.log(names);



//Other Explanation

username1();

function username1 (){
    var names1 = 5;
    console.log(names1);
    newUser1();

    //This functions will take the value from the outer function, if the outer function does not have a variable, then it will search globally
    function newUser1 (){
        console.log(names1);
    }
}

//Here the console log does not take the value from the function and errors out
console.log(names1);