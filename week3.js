{let ages = [3, 9, 23, 64, 2, 8, 28, 93];  //1.

let lastElement = ages.slice(-1); //1a//used .slice to retrieve the last element 
let firstElement = ages.slice(0,1); //1a//used .slice to retrieve the first element 
 console.log(lastElement - firstElement); //1a// Subtracted last element and first element and got 90

let addElement = ages.push(26); //1b//Pushed new age to array; 26 

console.log(ages);

sum = 0; //1c//Intialize sum method to 0

ages.forEach(function(num) {sum += num}); //1c//for each loop intialized, function(num) intialized & sum the array value together 
//(num) is the element parameter, grabbing 
average = sum / ages.length; //1c//Summed up values and divided them by number of elements in array to get average

console.log(average); //1c// 
}


//2-------------------------------------------------------------------
{
namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

sum = 0; //2a//

namesArray.forEach(function(names){   //2a// For-each intialized, function intialized, function code to sum up 
                                        //number of letter of each element in array
 sum += names.length}); 

 average = sum / namesArray.length; //2a// Summed up value of letters divided by how many elements 

 console.log(average); //2a// displayed average

namesArray.forEach(function(){             //2b Wrote a forEach loop to go through the array 
    console.log(namesArray.join(','));     //2b Used .join method and concatenated a comma
})

}
//-------------------------------------------------------------------
//3: How do you access the last element of any array? Use .slice(-1) 
//4: How do you access the first element of any array? Use .slice(0)

//5-------------------------------------------------------------------

let namesLength = []; 
//let sum2 = 0;

  for (i in namesArray) {
    
    namesLength.push(namesArray[i].length);
    console.log(namesLength.join(','));
} 
//6-------------------------------------------------------------------
let sum3 = 0;
for(let number of namesLength) {
    number + sum3;
}

console.log();   //??? Cant figure out how to console.log the sum

//7-------------------------------------------------------------------
function newFunction(word,n) {
    return word * n;       //I dont think this is right 
} 


//8-------------------------------------------------------------------
function createFullName(firstName,lastName) {
    console.log(firstName + lastName);
}
createFullName('Ricky ', ' Hansen');


//9-------------------------------------------------------------------
let greaterThan = (arr) => (arr.sum > 100); 
  console.log(true); 


{
//10-------------------------------------------------------------------
const arrayOfNumbers = [1,2,3,4,5,69]; //10

const average = arrayOfNumbers.reduce((a,b) => a + b, 0) / arrayOfNumbers.length; //10 using .reduce to return the sum elements, 
//sum 0 intialized in function and then divide with the number of array elements 

 console.log(average); 
}

{
//11-------------------------------------------------------------------
const array1 = [10,20,30];  
const array2 = [11,22,33];

const average = array1.reduce((a,b) => a + b, 0) / array1.length > array2.reduce((a,b) => a + b, 0) / array2.length;
console.log(average);      //used .reduce for both arrays, and then used a boolean to compare the two and then console.log(average)
}

{
//12-------------------------------------------------------------------

function willBuyDrink(isHotOutside,moneyInPocket) {  //Intialized function
    console.log(isHotOutside + moneyInPocket > 10.50); //Added parameters and booleaned to 10.50
 
}
willBuyDrink(0,11); //arguments set
}


{
//13-------------------------------------------------------------------
//https://www.statista.com/chart/23586/average-reliability-scores-for-new-cars/
//Toyota's are the 2nd most reliable car based on this chart
//100 = most reliable 
//The reason, I'm a Toyota enthusiast, not only are they reliable they do make fun cars likes the Supra and Lexus LFA
// Theres no reason why other brands cant be as reliable 
//It seems as if other companies are greedy and succumb to planned obsolescence 
function reliableCar(Toyota,Ford) {
    console.log(Toyota > Ford);
}
reliableCar(74,38);   //Toyota reliability score is 74/100 and Fords is 38/100
}                     //Dont buy a Ford
                      //Lol