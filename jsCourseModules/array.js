var colour = ['red', 'blue', 'green', 'yellow'];

//pop removes the last index value from the array
colour.pop();
console.log(colour);

var countries = new Array('India', 'US', 'Japan', 'Germany', 'Russia');

console.log(countries);
console.log(countries.length);


//shift removes the first index value form the array and moves the rest of the elements to the left
countries.shift();
countries[0] = 'United States'
console.log(countries);

//unshift inserts a new value to the first index of the array and shift the existing array elements to right
countries.unshift('England');
console.log(countries);

//This will return the index of the value in the array
console.log(countries.indexOf('Germany'));

//This country is not in the array so it will returm -1
console.log(countries.indexOf('Europe'));


//This is convert a string into an array of strings with each character
console.log(Array.from(countries[0]))



//Arrow function
var isEven = (element) => {
    if(element % 2 === 0){
        return true;
    } 
    return false;
}

console.log(isEven(2));

//This is equal to the above if condition
var isEven1 = (element) => {
    return element % 2 === 0;
}

console.log(isEven1(3));

//every function checks every element in the array with reference to the function isEven
//and returns true only of all the values pass the condition in the function
var result = [2,3,6,8]. every(isEven); //Passing on the reference of the function isEven

console.log(result);

//another method using callback functions
var result1 = [2,4,6,8]. every((ele)=>(ele%2 === 0)); //Passing on the reference of the function isEven

console.log('new result', result1);


