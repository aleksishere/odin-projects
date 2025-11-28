function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let middleIndex = Math.floor((arr.length - 1) / 2);
    let leftSide = arr.slice(0, middleIndex+1);
    let rightSide = arr.slice(middleIndex+1);

    let sortedLeft = sort(leftSide);
    let sortedRight = sort(rightSide);
    let mergedResult = merge(sortedLeft, sortedRight);

    return mergedResult;
  }
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  result = result.concat(left.slice(leftIndex), right.slice(rightIndex));
  return result;
}

console.log(sort([5, 2, 3, 8, 6, 7]));