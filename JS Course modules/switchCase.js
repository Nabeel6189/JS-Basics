//Ternary operator in javascript
let username=true;
username ? username ='nabeel' : username ='santhosh';
console.log(username);

//coercion
//The below list of values are falsy values
// undefined
// null
// 0
// ''
// NaN

let names = 'rajesh';
   names ? console.log('Condition is true') : console.log('Condition is false');

let num = '';
   2 === num ? console.log('Condition is true') : console.log('Condition is false');


//Switch case
let newUser = 'testprep';

switch(newUser){
    case 'admin':
        console.log('You get full access');
        break;
    
    case 'Sub admin':
        console.log('Gets access to create/delete everything');
        break;

    case 'testprep':
        console.log('Gets access to create/delete test');
        break;
    
    default:
        console.log('Trial user');
        break;
}

//switch case inside a function
function newOne(number){
switch(number){
    case 1: 
        return console.log(`First number`);

    case 2:
        return console.log('Second number');

    case 3:
        return console.log('Third number');

    default:
        return console.log('New number');
        
    };
};

newOne (1);

//function in variable
let newOne1 = function (number1){
    switch(number1){
        case 1: 
            return `First number`;
    
        case 2:
            return 'Second number';
    
        case 3:
            return 'Third number';
    
        default:
            return 'New number';
            
        };
    };
    
    console.log(newOne1 (2));

    //function in variable defined using arrow sign
let newOne2 = (number2) => {
    switch(number2){
        case 1: 
            return `First number`;
    
        case 2:
            return 'Second number';
    
        case 3:
            return 'Third number';
    
        default:
            return 'New number';
            
        };
    };
    
    console.log(newOne2 (3));

