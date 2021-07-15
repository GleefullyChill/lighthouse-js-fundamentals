const range = function(start, end, step){
  let rangeOutput = []
  if (start <= end && step > 0)
    for (start; start < end + 1; start += step){
      rangeOutput.push(start);
    }
  return rangeOutput;
}

console.log(range(20, 10, 2));
console.log(range(10, 30, -5));
console.log(range(-5, 2, 0));
//node range-function.js
