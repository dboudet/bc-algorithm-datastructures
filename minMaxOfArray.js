// create a function that takes an array of numbers & return both min and max in that order

// minMax([1,2,3,4,5]) should equal [1,5]

testArray = [1, 2, 3, 4, 5]
testArray2 = [22343, 23423, 43, 454, 4, 33]
testArray3 = [1, 1]
testArray4 = [234, 23, 55, 32, "seven", 355, 77]

function minMax(array) {
  let newArray = []
  let smallestNum = array[0]
  let largestNum = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNum) {
      smallestNum = array[i]
    }
    if (array[i] > largestNum) {
      largestNum = array[i]
    }
  }
  newArray.push(smallestNum, largestNum)
  console.log(newArray)
}

minMax(testArray4)
