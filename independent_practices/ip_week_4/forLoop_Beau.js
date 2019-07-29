let outArray = [];
for (let i = 0; i< 5; i++) {
    outArray.push(i)
}
console.log(outArray)
console.log("======= end =======")

console.log("======= add break with condition =======")
let outArray1 = [];
for (let i = 0; i< 5; i++) {
    if (i > 2) break;
    outArray1.push(i)
}
console.log(outArray1)
console.log("======= end =======")

console.log("======= loop through an existing array =======")
let arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    // will get 10 9 8 7 6
}
console.log(arr) //[10, 9, 8, 7, 6]
console.log("======= end =======")

console.log("======= nested for loop =======")
let arr1 = [[1,2], [3,4], [5,6]];
for (let i = 0; i < arr1.length; i++) { // run through outside array => 3 items
    for (let j = 0; j < arr1[i].length; j++) {
        // arr1[i] = array index i
        // when loop through, will get the first item [1, 2]
        console.log(arr1[i]) // (2) [1, 2] ... (2) [5, 6]
        console.log(arr[i][j])
        // this will return item inside the first array
        // [Array(2), Array(2), Array(2)]
    }
}
console.log(arr1) //[10, 9, 8, 7, 6]
console.log("======= end =======")