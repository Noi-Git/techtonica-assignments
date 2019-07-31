
// function sleep_in(weekday, vacation) {
//     let day_in_week = ['Monday', "Tuesday", "Wednesday", "Thrusday", "Friday"]
//     // let vacation = "vacation";
//     // let sleep_in = "we sleep in";
    
//     if (weekday === true) { //set monday - friday = true
//         return("Today is " + day_in_week)
//     } else if (vacation === true) {
//         return("Hoorayyy! you are on vacation")
//     } else {
//         return("We sleep in")
//     }
//     return;
// }
// console.log(sleep_in(false, true));


// function sleep_in(weekday, vacation) {
//     switch(weekday) {
//         case (true):
//             console.log("Today is a work day");
//             return("Today is a work day");
//     }

//     switch (vacation) {
//         case (true):
//             console.log("We sleep in")
//             break;
//         case (false):
//             console.log("You are not on vacation");
//             return("Hoorayyy! you are on vacation");
//     }
// }
// sleep_in(false, false)

// switch(weekday, vacation) {
//     case (true, true):
//         console.log("Today is a work day"); // false,true
//         return("Today is a work day");
//         break;

//     case (false, false):
//         console.log("You are not on vacation"); // true,false
//         return("You are not on vacation");
//         break;
//     default:
//         console.log("We sleep in") //false,false

// }

function sleep_in(weekday, vacation) {
    switch (vacation || !weekday) {
        case (true):
            console.log("sleep in")
            return true;        
    }
            console.log("not sleep in");
            return false;
    
}
sleep_in(false, true)