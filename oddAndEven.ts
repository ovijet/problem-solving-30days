let numb: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numb.length; i++) {
  if (numb[i] % 2 === 1) {
    console.log(numb[i],'odd');
  } else {
    console.log(numb[i],'even');
  }
}