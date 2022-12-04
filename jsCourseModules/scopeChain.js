
var names = 'nabeel';

username();

function username (){
    var names = 4;
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

var newNames = "drake";

function username1 (){
    var newNames = 5;
    console.log(newNames);
    newUser1();

    //This functions will take the value from the outer function, if the outer function does not have a variable, then it will search globally
    function newUser1 (){
        console.log(newNames);
    }
}

//Here the console log does not take the value from the function and errors out
console.log(newNames);

// const realConfig = realConfig("index.html", (err, data) => {

//  console.log('this is true');
// });