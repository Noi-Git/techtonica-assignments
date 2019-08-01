function fizzbuzz(number) {

    if (isNaN(number)) { 
        // console.log("The input need to be number"); 
        // return ("The input needs to be number");
      }else if (Math.sign(number) === -1) {
        console.log("Warning! Please in put positive number")
      } else {
          
        for (let i = 0; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
                // return("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
                // return("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
                // return("Buzz");
            } else {
                console.log(i)
            }
      }
    }
    return;
}
// console.log(fizzbuzz("x"));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(10));
console.log(fizzbuzz(15));