function fizzbuzz(number) {

    if (isNaN(number)) { 
        // console.log("The input need to be number"); 
        return ("The input needs to be number");
      }else if (Math.sign(number) === -1) {
        console.log("Warning! Please in put positive number")
      } else {
          
        for (let i = 0; i < number; i++) {
            if (number % 3 === 0 && number % 5 === 0) {
                return("FizzBuzz");
            } else if (number % 3 === 0) {
                return("Fizz");
            } else if (number % 5 === 0) {
                return("Buzz");
            } else {
                console.log("No Fizz or Buzz")
            }
      }
    }
    return;
}
console.log(fizzbuzz("x"));
console.log(fizzbuzz(3));
console.log(fizzbuzz(10));
console.log(fizzbuzz(15));