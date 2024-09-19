function fibs(n) {
  if (n < 1) {
    return;
  }

  const arr = [0];

  for (let i = 1; i < n; i++) {
    if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

function fibsRec(n) {
  console.log("This was printed recursively");
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const fibArr = fibsRec(n - 1);

  return [...fibArr, fibArr.at(-1) + fibArr.at(-2)];
}

console.log(fibsRec(8));
