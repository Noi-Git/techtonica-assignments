function metersToInches(num) {
    inches = num * 39.3701;
  
    if (isNaN(num)) {  // returen -> true and false
      console.log("it is not the number"); // exit
      return ("NaN");
    }else if (Math.sign(num) === -1) {
      // if not positive - print the warning
      console.log("Warning! this is not a positive number")
    } else {
      // else - do what it has to be done
      console.log("Yeah! you got it")
    }
    // console.log(inches);
    return num;
  }
  console.log(metersToInches(1.5));
  console.log(metersToInches(-1.5));
  console.log(metersToInches("x"));