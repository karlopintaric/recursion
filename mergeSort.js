function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  let i = 0;
  let j = 0;
  const m = leftArr.length;
  const n = rightArr.length;
  const sortedArr = [];

  while (i < m && j < n) {
    if (leftArr[i] < rightArr[j]) {
      sortedArr.push(leftArr[i]);
      i++;
    } else {
      sortedArr.push(rightArr[j]);
      j++;
    }
  }

  if (i === m) {
    sortedArr.push(...rightArr.slice(j));
  } else {
    sortedArr.push(...leftArr.slice(i));
  }

  return sortedArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
