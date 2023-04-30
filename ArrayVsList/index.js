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
    2,
    "The temperature on " + weekdays[i] + " was " + weeklyTemperature[i]
  );
}
