testArray = ["Chris","Emily","Dan","Cathy","Christian","Noah","Luiz","Matthew"]
console.log("This is the test array:" , testArray)

// function to get the first element in an array
function getFirstInFirst (array) {
    return array[0][0]
}
console.log("First element in first array:" , getFirstInFirst(testArray))

//function to get last element in array
function getLastElementInArray (array) {
    const lastSubarray = array[array.length-1]
    return lastSubarray[lastSubarray.length-1]
}
console.log("Last element in last subarray:" , getLastElementInArray(testArray))

//function to get last element in array (NOT USING VARIABLE)
function getLastElementInArray (array) {
    return array[array.length-1][array[array.length-1].length-1]
}
console.log("Last element in last subarray (not using variable):" , getLastElementInArray(testArray))

//function to get given element of a subarray at index [][] of array passed as parameter
const testArrayIndex = 3
const testSubArrayIndex = 1
function getElementAtIndex (arrayIndex, subArrayIndex) {
    return testArray[arrayIndex][subArrayIndex]
}
console.log (`The element at index [${testArrayIndex}] [${testSubArrayIndex}] of this array is:` , getElementAtIndex(testArrayIndex, testSubArrayIndex))

//function to get the index of an element in a subarray where its element matches a value passed as a parameter
const testValue = "z"

function findIndexByValue (value,array) {
    for (let i=0; i<array.length; i++) {
        const subArray = array[i]
        for (let j=0; j<subArray.length; j++) {
            if (subArray[j] === value){
                return "[" + i + "] " + "[" + j + "]"
            }
        }
    }
}
console.log("The element \"" + testValue + "\" is at index:" , findIndexByValue(testValue,testArray))