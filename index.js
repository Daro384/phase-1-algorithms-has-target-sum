function hasTargetSum(array, target) {
  const arrayCopy = [...array]
  while (arrayCopy.length) {
    let currentTarget = target
    currentTarget -= arrayCopy.splice(-1)[0]
    if (arrayCopy.find(element => element === currentTarget)) {
      return true
    }
  }
  return false
}

/* 
  O(n**2)
*/

/* 
  iterate over the array, subtract the target with a number in the array
  pop that item,
  check if any of the remaining items in the array are equal to the new target
  if there is a match return true
  else continue (reset target)
  do until no items in the array
  then return false
*/

/*
  example =>
  [5,2,-2,6,8], 10
  start a while loop which condition is the length of the array (it will continue aslong as there is any numbers in the array)
  start with an element (lets start with 5)
  subtract 5 from the target 10 - 5 = 5 (new target is now 5)
  remove 5 from the array
  now check if 5 is in the new array 5 => [2,-2,6,8]
  if it finds it it will return true, otherwise it will continue the while loop

  outside the while loop we return false because at this point it has gone through every pair, 
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;