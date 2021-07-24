testArray = [123,456,789,987,654,321,193,828,922]
console.log("This is the test array:" , testArray)

// function to get the first element in an array
function getFirstElementInArray (array) {
    return array[0]
}
console.log("First number in array:" , getFirstElementInArray(testArray))

//function to get last element in array
function getLastElementInArray (array) {
    const lastNum = array.length - 1
    return array[lastNum]
}
console.log("Last number in array:" , getLastElementInArray(testArray))

//function to get value of number at index [] of array passed as parameter
const testIndex = 2
function getIndex (index) {
    return testArray[index]
}
console.log ("This value is at index", testIndex , "of the array:" , getIndex(testIndex))

//function to get the index of an element in an array where its element matches a value passed as a parameter
const testValue = 321
function findIndexByValue (value,array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === value){
            return i
        }
    }
}
console.log("The number ", testValue , "is at index:" , findIndexByValue(testValue,testArray))