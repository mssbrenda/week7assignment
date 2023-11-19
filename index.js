

//1. create an array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


//subtract the value of the first element in the array
//from the value in the last element, 

let calculateDifference = () => ages[ages.length-1] -= ages[ages.length - ages.length];
console.log(calculateDifference());
//90 prints to the console

ages.push(88); 

console.log(ages + 'new value');
// IS the code dynamic?
console.log(calculateDifference());
// retry after push method and 85 returns.............yes


//LOOP TO ITERATE THROUGH THE ARRAY AND CALCULATE AVERAGE 
let sumOfAges = 0;
for (let i = 0; i <ages.length; i++){
  sumOfAges += ages[i]; 
  console.log(sumOfAges);
  }
let averageAge = sumOfAges /= ages.length;

console.log("average of ages:", averageAge);
// average age prints to 34.66666666 






//2. CREATE AN ARRAY CALLED NAMES 


let names = ['Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
let totalCharacters = 0;


//a. calculate the average 
for (let i = 0; i < names.length; i++){
  totalCharacters += names[i].length;
  console.log(names[i], totalCharacters);
}
//this for loop will calculate the sum of letters 

let averageLetters = totalCharacters /= names.length;

console.log('average of names:', averageLetters);

//b. use a loop to iterate through the array again 
//and concatenate all the names together, spaced

let concatNames = " ";
for(let i=0;i<names.length;i++){
  concatNames = concatNames.concat(names[i]+ " ");
  console.log(i,'names concatenated:',concatNames);
}





//HOW DO YOU ACCESS LAST ELEMENT IN AN ARRAY?
//array.length-1 ;
console.log(ages.length-1, 'Last element of ages')

//how to access first element of an array?
//array[0]; or array[array.length - array.length];for name of names (i=0; i < names; i++){  name.length = nameLengths[];}console.log(nameLengths);
console.log("first age element", ages[0]);


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i=0; i<names.length; i++){
  nameLengths.push(names[i].length);
console.log('name lengths array', nameLengths);
}


//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let charactersTotal =0;

for (let i=0; i<names.length;i++){
  charactersTotal += names.length[i];
  console.log('characters total in names',charactersTotal);
}



//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords (word, n) {
  console.log('word for:', word, "n for:", n);
  let concat = word.repeat (n);
  console.log(concat);
}

concatWords('Hello',3);

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
  let fullName = firstName + " " + lastName;
console.log(fullName);
}
//pass in an element to the fucntion bellow
fullName('Brenda', 'Arroyo');





//9Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [80,60,70,8];
let numbers2 = [1,2,3,4];

function sumNumbersArray(array){
  let total = 0;
  for (let i=0; i<array.length; i++){
    total += array[i];
    console.log('total', total);
  }

      if (total > 100 ){
        console.log(true);
        return true; 
      } else {
        console.log(false);
        return false;
      }

    
sumNumbersArray(numbers2);
//pass in either or function. above




//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateNumbersAverage (array){
  for (let i=0; i < array.length;i++)
total =+ array[i]
console.log('calculte function:', calculateNumbersAverage)
}
calculateNumbersAverage(numbers1);

let average = total / array.length;
console.log('average of numbers:', average);


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let numbers3 = [100,100,100];
let numbers4 = [100,100,99];

function twoAverages (array1, array2){
  let total1 = 0;
  let total2 = 0; 
for (const number of array){
  total1 += number 
  console.log("current numberloop 1:", number, "total:", total1);
}
for (const number of array){
  total2 += number 
  console.log("current numberloop2:", number, "total:", total2);
}

let average1 = total1 / array.length;
let average2 = total2 / array.length; 

console.log("averages:", average1, average2);
if (average1 > average2 ){
  console.log(true);
  return true
}else if (average1 < average2){
  console.log(false);
  return true
} else{
  console.log("numbers are equal");
};
}

//push in the elements 
twoAverages(numbers3, numbers4);



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let hotOutside = true 

function willBuyDrink(isHotOutside, moneyInPocket) {
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;

console.log('Buy drink?', buyDrink);
return buyDrink; 

}
willBuyDrink(true, 11);








