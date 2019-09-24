// question 2
function mostFrequently(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    /* go to arr[0] and count 1 
			 -- then compare if the arr[0 + 1] is the same 
			 -- if yes count 1
		*/

    let fruit = arr[i];

    // count the number of each fruit appeared in the array
    if (count[fruit] > 0) {
      count[fruit]++;
    } else {
      count[fruit] = 1;
    }
  }

  return count;

  // try to get the fruit that have a highest count -- use Math.max
}

let fruit = mostFrequently([
  'apple',
  'banana',
  'sandwich',
  'banana',
  'cookie',
  'cookie',
  'banana'
]);

let arr = Object.values(fruit);
let max = Math.max(...arr);

console.log(`Max value: ${max}`);

// mostFrequently([
//   'apple',
//   'banana',
//   'sandwich',
//   'banana',
//   'cookie',
//   'cookie',
//   'banana'
// ]);

console.log(
  'count all fruit ',
  mostFrequently([
    'apple',
    'banana',
    'sandwich',
    'banana',
    'cookie',
    'cookie',
    'banana'
  ])
);
