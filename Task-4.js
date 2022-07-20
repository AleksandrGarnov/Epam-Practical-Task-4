
// Practical Task -4 // 
// 1.Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console //
const arrayOfFilm = ['Interstellar','The Fate of the Furious','Altitude','Cigarette Soup','Bad Kids of Crestview Academy','Sandy Wexler','Ghosts of Darkness','Get Out','Cyborg X','Savage Dog','Sand Castle','Fallen','Sinbad and the War of the Furies','My Cousin Rachel','My Father Die'];

arrayOfFilm.forEach(name => console.log(name));

// 2.Given an array of car manufacturers, convert the array to a string and back to an array // 
const arrayOfBrands = ['BMW','Mersedes','Audi','Toyota','Ferrari','Land Rover','Lexus','Mazda','Ford'];
const arrToString = arrayOfBrands.join();
const stringToArray = arrToString.split(',');

console.log (arrToString);
console.log (stringToArray);

// 3.Given an array of the names of your friends, add the words hello to each element of the array //
const arrayOfFriends = ['Ann','John','Jack','Kate','Marco','Lica','Frederic','Michail','Mike','Johny'];
const sayHi = arrayOfFriends.map((currentName) => 'Hello, '+ currentName);

console.log (sayHi);

// The second option //
arrayOfFriends.forEach((name) => {
    return console.log (`Hello, ${name}`);
});

// 4.Convert numeric array to Boolean //
const arr2 = new Array(6);

for (let i = 0; i < arr2.length; i++) {
  arr2[0] = false;
  arr2[i] = true;
}

console.log(arr2);

// 5.Sort the array [1,6,7,8,3,4,5,6] in descending order //
const arr = [1, 6, 7, 8, 3, 4, 5, 6];
const arrDesc = arr.sort(function(a,b) {return b - a});

console.log(arrDesc);
// Unique Number
const uniqueNumber = [... new Set(arr)];

console.log(uniqueNumber)

// 6.Filter array [1,6,7,8,3,4,5,6] by value > 3 //
const arraySort = arr.filter(function(number) {
  return number > 3;
})

console.log(arraySort);

// 7.Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const array = [10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60];
const index = array.indexOf(20);
console.log(index);


// 8.Implement a loop that will print the number 'a' until it is less than 10 //
 let a = 0;

 while (a < 10) {
    a++;
    console.log(a);
  }

// 9.Implement a loop that prints prime numbers to the console //
 function primeNumber(n) {
  primeNumber:
    for (i =1; i <=n; i++) {
      for(j = 2; j < i; j++) {
        if(i % j == 0) {
          continue primeNumber;
        }
      }
  console.log(i)}
}
primeNumber(10)

// 10.Implement a loop that prints odd numbers to the console
let number = 0;

while (true) {
    if (number % 2 != 0 && number <130)
        console.log(number);
    number ++;
}