// let vowels = ['a', 'e', 'i', 'o', 'u']
let vowels = "aeiou"
let consonent = "whatisit"
let newWord = []

console.log('#####');
for(let i = 0; i< consonent.length; i++){
    if(vowels.includes(consonent[i])){
        console.log(consonent[i]);
    }
}
for(let i = 0; i< consonent.length; i++){
    if(!vowels.includes(consonent[i])){
        console.log(consonent[i]);
    }
}
console.log('#####');

/*
// convert vowels into array
// console.log(consonent.split(''))
// convert consonent into array
let newConsonent = consonent.split('')
let newVowels = vowels.split('')
console.log(newConsonent)
console.log(newVowels)

// compare the value of vowels to consonents
let compareTwo = newConsonent.includes(newVowels)
console.log(compareTwo)

for (let i = 0; i < compareTwo.length; i++) {
    console.log(compareTwo)
}

   // if yes => store in a new empty array
   if (compareTwo === true) {
       // true = push to newWord
    //    compareTwo.push[newWord]
   }
   */