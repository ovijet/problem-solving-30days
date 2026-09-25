let num: number[] = [10, 15, 40, 60, 90, 5];

let max = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max);
