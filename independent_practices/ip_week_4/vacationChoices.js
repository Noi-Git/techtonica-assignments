let vacationChoices = [ 
    ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], 
    ['Erin', ['Banff, Alberta, Canada', 'Iceland']], 
    ['Janet', ['London', 'Hogwarts']] 
]


for (let i = 0; i < vacationChoices.length; i++) {
    let name = vacationChoices[i][0]
    // console.log(name)
    let place = vacationChoices[i][1]
    // console.log(place)
    let want = name + ' is willing to go to '

    for (let j = 0; j < place.length; j++) {
        if (j === place.length -1) {
            want = want + " or "
        } else if (j > 0){
            want = want + ", "
        }
        want = want + place[j]
    }
    console.log(want);
    }
    

