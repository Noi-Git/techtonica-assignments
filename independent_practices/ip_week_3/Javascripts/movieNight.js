console.log("**** This is result from movieNight exercise ****")

// let people = ["Priya", "David", "Alex", "Ming", "Breanna"];
// let popcorn = true;
// let priya = true;
// let ming = true;
// let alex = true;
// let david = true;

// for (let i = 0; i < people.length; i++) {
//     if (popcorn === true && ming === true) console.log(`David is going because Ming is going and there is popcorn`)
//     if (ming === true)  console.log(`David is going because Ming is going`)
//     if (david === true) console.log("Alex is going. Ming is not going")
//     if (priya === true) console.log("Ming is going")
//     console.log(`***** end ***`)
// }

function movieNight(group) {
    let people = ["Priya", "David", "Alex", "Ming", "Breanna"];
    let popcorn = true;
    let priya = true;
    let ming = true;
    let alex = true;
    let david = true;

for (let i = 0; i < people.length; i++) {
    if (popcorn === true && ming === true) console.log(`David is going because Ming is going and there is popcorn`)
    if (ming === true)  console.log(`David is going because Ming is going`)
    if (david === true) console.log("Alex is going. Ming is not going")
    if (priya === true) console.log("Ming is going")
    console.log(`***** end ***`)
    }
    return people;   
}
movieNight(people)
console.log(people)