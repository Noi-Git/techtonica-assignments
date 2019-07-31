function loopThrough(num) {
    for (let i = 0; i < num; i++) {
      if (isNaN(num)) {  // returen -> true and false
        console.log("it is not the number"); // exit
        return ("NaN");
      }else if (Math.sign(num) === -1) {
        // if not positive - print the warning
        console.log("Warning! this is not a positive number")
      } else {
        console.log("Hello World!");
      }
    }
    return num;
  }
  console.log("The number passed in is " + loopThrough(0));
  console.log("The number passed in is " + loopThrough(3));
  
  