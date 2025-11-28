function analyzeArray(arr) {
  const object = {
    average: average(arr),
    min: minimum(arr),
    max: maximum(arr),
    length: length(arr)
  }
  return object
}

function average(arr) {
  let avg = 0;
  arr.forEach(element => {
    avg += element;
  });
  return avg / arr.length;
}

function minimum(arr) {
  arr.sort((a, b) => a - b)
  return arr[0]
}

function maximum(arr) {
  arr.sort((a, b) => a - b)
  return arr[arr.length-1]
}

function length(arr) {
  return arr.length;
}

module.exports = analyzeArray;