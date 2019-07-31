let crying = {
    name: "noi",
    feeling: "hungry"
}
// console.log(cry);
delete crying.name;
console.log(crying);

const feeling = [
    {day: "monday", feeling: "happy", toDo: "dance"},
    {day: "wednesday", feeling: "a little sad", toDo: "got to go eat"},
    {day: "friday", feeling: "grumpy", toDo: "got to do karaoke"}
]

function myArray(arr) {
    let secondKey = "";
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.length)
        // console.log(arr[i]);
        console.log(arr[i].feeling);
        secondKey += arr[i].feeling;
    }
    console.log(secondKey);
    return secondKey;
}
myArray(feeling)