// question 4
function positiveInt(n) {
  if (n % 2 === 0) {
    num = 0;
    for (let i = 0; i < n; i++) {
      num++;
      console.log(n, n / 2);
    }
  }

  if (n % 2 !== 0) {
    for (let j = 1; j <= n; j++) {
      console.log(j, j * 3 + 1);
    }
  }
  return;
}
console.log(positiveInt(16));
console.log(positiveInt(7));

// question 4
function positiveInt1(n) {
  if (n <= 0) {
    console.log('done');
    return;
  }
  console.log(n);
  n--;
  positiveInt1(n % 2);
}
positiveInt1(10);
// console.log(positiveInt(16));
// console.log(positiveInt(3));
