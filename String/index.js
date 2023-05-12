console.log("LeetCode problem # 58. Length of Last Word");

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

//  Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.
// Accepted
// 1.1M
function lengthOfLastWord(s) {
  let trimedString = s.trim();
  console.log(trimedString.length);
  return trimedString.length - trimedString.lastIndexOf(" ") - 1;
  //  meaning of ===> trimedString.length - trimedString.lastIndexOf(" ") - 1;
  //  (length of str - Index of last " " - 1 because the index start from 0 )
  //  " Hello World" ===> 11 - 5 -  1=> 5;
  //"   fly me   to   the moon  " ==> 22 - 17 -1
  // "luffy is still joyboy" ===> 21 - 14 -1
}

// console.log(lengthOfLastWord(" Hello World "));

// function lengthOfLastWord(s) {
//   s = s.trim();
//   let array = s.split(" ");
//   let result = array[array.length - 1].length;
//   return result;
// }
console.log(lengthOfLastWord(" Hello World ")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
