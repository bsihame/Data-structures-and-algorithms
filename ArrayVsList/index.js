// Array Vs List

// Array
// - has a fixed size
// - you create an array by specifying it's size
// -you can write to an array with : a[index]= Value
// - you can read from an array with x = a[index]

// list
// -has no fixed size
//-is often created empty, then value are added to it
//-you can add something to a list with l.add(value)
// -you can read something from a list with x = l.get(index)

console.log("Array");

console.log("Array's methods");
let array = [1, 2, 3, 4, 99];
array.push(100);
// we add value at the end of the array
console.log(array);
// we remove a value from the end
array.pop();
console.log(array);
console.log("====================================================");
console.log("Fixed array example");

// we never use push or pop method
const weeklyTemperature = [70, 72, 68, 65, 74, 74, 73];
console.log("The temperature on Sunday was ", weeklyTemperature[0]);
console.log("The temperature on Monday was ", weeklyTemperature[1]);
console.log("The temperature on Tuesday was ", weeklyTemperature[2]);
console.log("The temperature on Wednesday was ", weeklyTemperature[3]);
console.log("The temperature on Thursday was ", weeklyTemperature[4]);
console.log("The temperature on Friday was ", weeklyTemperature[5]);
console.log("The temperature on Saturday was ", weeklyTemperature[6]);

//code more dry
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
for (let i = 0; i < weekdays.length; i++) {
  console.log(
    "The temperature on " + weekdays[i] + " was " + weeklyTemperature[i]
  );
}

console.log("=======================================================");
console.log("Average of the weekly temperature");

function averageTemp(arr) {
  let totalTemp = 0;
  for (let i = 0; i < weeklyTemperature.length; i++) {
    totalTemp += weeklyTemperature[i];
  }
  return "The average temperature for this week was " + totalTemp;
}
console.log(averageTemp(weeklyTemperature));

console.log("=======================================================");
console.log("Find the smallest value in the array");

function smallestVal(arr) {
  let smallestValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
    }
  }
  return "The smallest value is " + smallestValue;
}
console.log(smallestVal([70, -72, 68, 10, 74, 74, 73]));

console.log("=======================================================");
console.log("Find the largest value in the array");

function largestVal(arr) {
  let largestValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestValue) {
      largestValue = arr[i];
    }
  }
  return "The largest value is " + largestValue;
}

console.log("=======================================================");
console.log("Reverse an array of string");
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

function reversedArray(arr) {
  // 1) Initialize start and end indexes as start = 0, end = n-1
  let start = arr[0];
  let end = arr[arr.length - 1];
  //   2) In a loop, swap arr[start] with arr[end] and change start and end as follows :
  // start = start +1, end = end – 1;
  for (let i = start; i < arr.length; i++) {
    for (let j = end; j < arr.length; i--) {
      arr[i] = arr[j];
      arr[j] = arr[i];
    }
  }
  return arr;
}
console.log(reversedArray([700, 72, -68, -1, -74, -74, 80]));

console.log("=======================================================");
console.log("Sum of delta");
//  accepts an array and returns the total of the differences of each value in the array
//  given:[2, 6, 12,19];
// returns(4+6+7)  -->  17

function sumDelta(arr) {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let val1 = arr[i];
    let val2 = arr[i + 1];
    let delta = Math.abs(val1 - val2);
    total += delta;
  }
  return total;
}
console.log(sumDelta([2, 6, 12, 19]));
//what if the array is empty ;
console.log(sumDelta([]));
// what if there is just one value
console.log(sumDelta([2]));
//  what if 2 values
console.log(sumDelta([2, 4]));

console.log("=======================================================");
console.log("Find a value in an array");

//  return true if the given array contains the given value
//  given: [12, 45, 67, 90], 67 ==> true;
// given: [12, 45, 67, 90], 1 ==> false;

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(contains([12, 45, 67, 90], 67));
console.log(contains([12, 45, 67, 90], 1));
console.log(contains([], 1));

console.log("=======================================================");
console.log("Is the array is sorted");

// return true  if the array is sorted in acceding order where each element is greater or equal to element preceding
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr.length === 0) return false;
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); //==> true
console.log(isSorted([1, 3, 2, 4, 5])); //==> false
console.log(isSorted([1, 3, 2, 4, 5])); //==> false
console.log(isSorted([1, 1, 1])); //==> false
console.log(isSorted([1]));
console.log(isSorted([]));
