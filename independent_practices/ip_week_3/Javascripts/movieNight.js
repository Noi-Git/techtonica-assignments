console.log("**** This is result from movieNight exercise ****")

function movieNight(names) {
    let attending = [];
    // let people = ["Priya", "David", "Alex", "Ming", "Breanna"];
    let popcorn = false;
    let priya = true;
    let ming = true;
    let alex = true;
    let david = true;

for (let i = 0; i < names.length; i++) {
    if (popcorn === true && ming === true) attending.push('David') 
        // console.log(`David is going because Ming is going and there is popcorn`)
    if (ming === true) attending.push('Priya')  
        // console.log(`Priya is going because Ming is going`)
    if (david === true) attending.push('Alex')
        // console.log("Alex is going. Ming is not going")
    if (priya === true && david === false) attending.push('Priya') && attending.push('Ming')
        // console.log("Ming is going")
        // console.log(`***** end ***`)
    if (attending.length >= 2) attending.push('Breanna')
        console.log(attending)
    }
    return attending;   // one thing that you want to output
    // console.log(attending)

}
movieNight([""])



