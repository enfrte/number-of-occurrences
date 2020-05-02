// Count number of occurrences 
// forEach example
const nums = [1, 5, 4, 4, 3, 3, 4, 5, 6];
const uniqueNums = [];
const output = {};

nums.forEach((val, i, arr) => {
  if (uniqueNums.includes(val) === false) {
    uniqueNums.push(val);
  }
});
//uniqueNums; 
uniqueNums.sort();
//uniqueNums; 

uniqueNums.forEach((val, i, arr) => {
  let counter = 0;
  nums.forEach((numsVal, numsI, numsArr) => {
    if (val === numsVal) {
      counter++;
    }
  });
  output[val] = counter;  
});
//output;
console.log(output);