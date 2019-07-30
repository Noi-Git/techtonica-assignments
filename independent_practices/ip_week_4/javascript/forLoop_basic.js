for (let i =0; i < 10; i++) {
    console.log("I love", i) 
    // will return I love 0 - I love 10
}

console.log("======= end =======")

for (let i =0; i < 10; i++) {
    console.log("I saw", i + " deer") 
    // will return I saw 0 deer - I saw 10 deer
}
console.log("======= end =======")

for (let i =0; i < 10; i+=2) {
    console.log("I saw", i + " deer") 
    // will return I saw 0 deer - 2 4 8
    // start from 0
}
console.log("======= end =======")

for (let i =10; i > 0; i-=2) {
    console.log("I saw", i + " deer") 
    // will return backward 10 8 6 4 2
}
console.log("======= end =======")

