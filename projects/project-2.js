/*
Instructions

Create a JavaScript file and name it assignment-2.js.
Inside this file, write JavaScript code solving the two challenges below.
Also include an explanation of what your code is doing in your own words.
You can write plain English in JavaScript files using multi-line comments.
*/

/* Challenge 1
Write a loop that logs the following triangle to the console:
#
##
###
####
#####
######
#######
Diving Deeper: Are you using `console.log()` multiple times for each line?
Can you do it with one `console.log()` for all 7 lines of hashes?
*/

/* Solution
Each row has the number of hashes equal to the row number.
A single loop should do because, by using the loop index as the row number,
we can append a number of "#" equal to the row number in each iteration.
We finish each iteration with a newline charachter "\n"
to achieve the graphical effect in the console.
*/

var triangleOfHashes = "";

for (row = 1; row <= 7; row++) {
  let hashes = "#".repeat(row) + "\n";
  triangleOfHashes += hashes;
}

console.log(triangleOfHashes);


/*
Challenge 2

Write a function that takes in a number as a parameter.
The function must log `"the number is even"` if the given parameter is an even number,
and log `"the number is odd"` if it is odd.

Diving Deeper: What happens if the given parameter is not a number at all?
Hints For Challenge 2, read about the remainder operator - %.
*/

/* Solution
A binary if espression using "modulo" operator will yield the correct results,
because a number can only be either even or odd.
At the beginning I do the parameter type check by asking if the input is a NaN,
or is null, or is the empty stirng "", or is the empt array [].
This is the correct way to check in JS, because of the confusion
between string-numbers like "12" and primitive numbers like 12,
and NaN being typeof number.
This trick keeps the usual expected behaviour for string-numbers in JS.
*/

function isEven(number) {
  if (isNaN(number) || number == null || number == [] || number == "") {
    console.log("ERROR: The parameter " + number + " is not a number!");
  } else {
    console.log("The number " + number + " is " + (number % 2 == 0 ? 'even' : 'odd'));
  }
}

isEven(13);
isEven(4);
isEven("45");
isEven("98");
isEven(NaN);
isEven("Ciao Marco");
isEven({});
isEven([]);
isEven("");
isEven();
isEven(null)
isEven(13, null, 4, "98", NaN, [])


document.write("<p><a href='https://repl.it/@MarcoSanto/Brain-Station-Assignment-2'>SE IT RUN ON REPL.IT</a></p>");