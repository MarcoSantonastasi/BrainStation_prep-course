/* Fizz Buzz proverbial problem */
for (var i = 1; i <= 100; i++) {
    console.log(
      (i%5 == 0 ? "fizz":"") + (i%3 == 0 ? "buzz":"") + (i%5 != 0 && i%3 != 0 ? i:"")
    );
}