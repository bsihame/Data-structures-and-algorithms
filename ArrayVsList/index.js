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

// return true  if the array is sorted in acceding order where each element is greater or equal to element preceding it
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
console.log(isSorted([1, 1, 1])); //==> true
console.log(isSorted([1])); //==> true
console.log(isSorted([])); //==>  true

console.log("=======================================================");
console.log("Is the array is sorted either ascending or descending");

//[1, 2, 3, 4, 5]
//[4, 3, 2, 1, 5]
//return true if the array is sorted either ascending, or descending

function sorted2(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      ascending = false;
    }

    if (arr[i] > arr[i - 1]) {
      descending = false;
    }
  }

  return ascending || descending;
}
console.log(sorted2([1, 2, 3, 4, 5])); //==> true
console.log(sorted2([1, 3, 2, 4, 5])); //==> false
console.log(sorted2([5, 4, 3, 2, 1])); //==> true
console.log(sorted2([1, 1, 1])); //==> true
console.log(sorted2([1])); //==> true
console.log(sorted2([])); //==>  true

console.log("=======================================================");
console.log("Minimum Window Substring");
// A substring is a contiguous non-empty sequence of characters within a string.

// Given two strings largeString and target, return the minimum substring of largeString such that every character in target is included in the substring. If there is no such substring, return an empty string "".

// Constraints:
// • largeString and target are lowercase letters with no punctuation
// • target does not have any duplicate characters

// Example 1:
//   Input: largeString = "adobecodebanc", target = "abc"
//   Output: "banc"
//   Explanation: The minimum substring "banc" includes 'a', 'b', and 'c' from target string.
function minWindow(largeString, target) {
  // create hashmap for the count of the Char
  let charCount = {};
  for (let i = 0; i < target.length; i++) {
    charCount[target[i]]
      ? (charCount[target[i]] += 1)
      : (charCount[target[i]] = 1);
  }

  let left = 0;
  let right = 0;
  let minStart = -1;
  let minEnd = -1;
  let count = Object.keys(charCount).length;
  while (right < largeString.length) {
    const currChar = largeString[right];
    if (charCount[currChar] !== undefined) {
      charCount[currChar]--;
      if (charCount[currChar] === 0) count--;
    }
    right++;

    while (count === 0) {
      if (minStart === -1 || right - left < minEnd - minStart) {
        minStart = left;
        minEnd = right;
      }
      const currChar = largeString[left];
      if (charCount[currChar] !== undefined) {
        charCount[currChar]++;
        if (charCount[currChar] > 0) count++;
      }
      left++;
    }
  }

  if (minStart === -1) {
    return "";
  } else {
    return largeString.slice(minStart, minEnd);
  }
}
console.log(minWindow("adobecodebanc", "abc"));

console.log("=======================================================");
console.log("Find the largest three distinct element in an array");

// Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).

// Examples :

// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

function largestTreeElements(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  if (arr.length < 3) return "Invalid Input";
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr > first) {
      third = second;
      second = first;
      first = curr;
    } else if (curr > second) {
      third = second;
      second = curr;
    } else if (curr > third) {
      third = curr;
    }
  }
  return [first, second, third];
}

console.log(largestTreeElements([10, 4, 3, 50, 23, 90]));
