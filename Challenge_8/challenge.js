//Exercise 1
//Create a loop that prints out numbers 1 to 100 in the console. 
for (var i = 1; i <= 100; i++){
    console.log(i);
}

//Exercise 2
//Write a loop that makes seven calls to console.log to output a triangle.
//It may be useful to know that you can find the length of a string by writing .length after it.
var triangle = '#';
for (var triangle = '#'; triangle.length < 8; triangle +='#'){
    console.log(triangle);
}

//Exercise 3
//Print the numbers 1 to 100 to the console.
//For every number that is a multiple of 5 print the word Fizz
//For every number that is a multiple of 3 print the word Buzz
//If a number is a multiple of 5 and 3 (like 15) print the word FizzBuzz
for (var i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log('Fizz');
    }else if(i % 5 == 0){
        console.log('Buzz');
    }else if (i % 5 == 0 && i % 3 ==0){
        console.log('FizzBuzz');
    }else{
        console.log(i);
    }
}
// I used the modulo operator to get multiples of 3 & 5 but am unable to get the multiple of 15 to print FizzBuzz.

//Exercise 4
//Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
//At each position of the grid there is either a space or a '#' character. 
//The characters should form a chessboard.
