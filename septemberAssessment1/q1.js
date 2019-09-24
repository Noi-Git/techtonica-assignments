// Question 1
function minMax(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  } else return false;
}
minMax(3, -1, 3);
minMax(5, 6, 8);

// === test ===
console.log(minMax(3, -1, 3));
console.log(minMax(5, 6, 8));

/* === runtime === 
	The runtime for this function is o(1) because it uses only 4 simple calculations
	first >
	secone =
	third <
	fouth =
*/
