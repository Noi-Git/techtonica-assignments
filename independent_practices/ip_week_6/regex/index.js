// Write a function that takes a word and returns true if the word ends with tonica
function regEx(word) {
    let regex = /tonica/
    // console.log(regex.test(word));
    if (regex.test(word) === true) {
        console.log(true);
        return true;
    }
}
regEx("techtonica")

 
// Write a function expression that takes a string replaces all instances of symantec with semantic?
let replaceWord = function(sentence) {
    let originalWord = "symantec";
    return sentence.replace(originalWord, "semantic");
}
console.log(replaceWord("this is toppic about symantec. symantec is the name of a company"))


// Write a function that takes a string and deletes all words that end in ing?
let deleteIng = function(word) {
    let afterDelete = word.replace(/\w+(ing)/g, "");
    return afterDelete;
}
console.log(deleteIng("eatting and sleeping while sitting at the desk."))


//Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
function emailAddress(email) {

    if (email.match(/\w+(@)/)) {
        return true;
    } else {
        return false;
    }

}
console.log(emailAddress("eatting@gmail.com"))


//Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
function newName(name) {
let nameArray = name.match(/.\w+./g)
return nameArray;
}
console.log(newName("Leah, Russell, Michelle"))
