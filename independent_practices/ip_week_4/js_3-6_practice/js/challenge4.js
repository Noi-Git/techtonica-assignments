function fizzbuzz(number) {
    // if (number === 0) {
    //     console.log("");
    // }

    // if (number !== number) {
    //     return ("not a number")
    // }

    if (!number && isNaN(number)) {  
        console.log("it is not the number"); 
        return ("NaN");
    }
    if (number < 0) {
        console.log("Warning! this is not a positive number")
    } 
        
    for (let i = 1; i <= number; i++) {
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
    
    // return 'Noi';
}
// console.log(fizzbuzz("x"));
console.log(fizzbuzz(3));
// fizzbuzz(10);
// console.log(fizzbuzz(0));