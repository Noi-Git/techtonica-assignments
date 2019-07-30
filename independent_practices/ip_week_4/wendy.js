function vowelsAndConsonants(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let wordVowels = [];
    let wordConsonants = [];

    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        // console.log(word.includes(vowels));

        if (vowels.includes(word[i])) {
            // if word[i] which is at index 0 is in vowels
            // if j is in vowels array
            wordVowels.push(word[i]);
            // console.log(wordVowels);
        } else {
            wordConsonants.push(word[i]);
        }
    }
    for(let j=0; j<wordVowels.length;j++){
        console.log(wordVowels[j]);
    }
    for(let k=0; k<wordConsonants.length; k++){
        console.log(wordConsonants[k]);
    }
}
vowelsAndConsonants("javascriptloops");