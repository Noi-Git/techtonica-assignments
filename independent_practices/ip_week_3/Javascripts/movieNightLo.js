console.log("***** movieNight Lo's solution *****")
// writh a function that takes in and array 0-5 of people
// output people who are interested in going

function movieNight (names) {
    let attending = [];
    
    // if david is in the names array, add David to the attending array
    if (names.includes('David')) {
        attending.push('David');
        console.log(attending);
    }
    
    // if Alex is in the names array and if David is in the attending array, add Alex to the attending array.
    if (names.includes('Alex') && attending.includes('David')) {
            attending.push('Alex')
            console.log(attending)
    }

    // if Ming is in the names array, and if Priya is in the name array,  and David is NOT in the attending array, add Ming to the attending array.
    
    /*if (names.includes('Ming') && names.includes('Priya') && attending.includes('David') === false) {
        attending.push('Ming')
        // attending.push('Priya')
        console.log(attending)
    }
    */

        if (names.includes('Ming') && names.includes('Priya') && !names.includes('David')) {
        attending.push('Ming')
        console.log(attending)
    }

    // check if Priya is in the names array, and Ming is in the attending array, add Priya to the attending array.
        if (names.includes('Priya') && attending.includes('Ming')) {
            attending.push('Priya')
            console.log(attending)
        }

    // if Breanna is in the names array, and if there are 3 or more items in the attendingarray, and Breanna to the attending array.
        if (names.includes('Breanna') && attending.length >= 2) {
            attending.push('Breanna')
            console.log(attending)
        }

    return attending;
}

// movieNight(['David', 'Alex'])
// movieNight(['Ming', 'Priya', 'Alex'])
// movieNight(['Ming', 'Alex', 'Breanna'])
// movieNight(['Ming', 'Priya', 'David'])
movieNight(['Ming', 'Priya', 'Breanna'])
// console.log(attening);