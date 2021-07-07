testArray = [123,456,789,987,654,321,193,828,922]

// function to get the first element in an array

/* 
function getFirstElementInArray (array) {
    console.log(array[0])
}
getFirstElementInArray(testArray)
*/

//function to get last element in array

/* 
function getLastElementInArray (array) {
    const lastNum = array.length - 1
    console.log(array[lastNum])
}

getLastElementInArray(testArray)
 */


//function to get given element of an array passed as parameter

/* 
const testIndex = 2

function getIndex (index) {
    return testArray[index]
}

console.log (getIndex(testIndex))
 */

//function to get the index of an element in an array where its element matches a value passed as a parameter

const testValue = 321

function findIndexByValue (value,array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === value){
            return i
        }
    }
}

console.log(findIndexByValue(testValue,testArray))