// set constants and display starting array
let testArray = ["Jack","Jane","Jessica","Jillian","Joe","Josephine"]
console.log(`Starting Array: ${testArray}`)

const valueToAdd = "Bob"
// function to perform enqueue 
// function enqueueToArray(array,value){
//     array[array.length] = value
//     return array
// }
// console.log("Array after enqueue (1):" , enqueueToArray(testArray,valueToAdd))

// alternate with arrow notation
let enqueueToArray2 = (array,value) => array[array.length] = value
enqueueToArray2(testArray,valueToAdd)
console.log(`Array after enqueue (2): ${testArray}`)


// function to perform dequeue

// ATTEMPT 1 ---leaves empty spot
// function dequeueFromArray(array){
//     let poppedValue = array[0]
//     array[0] = ""
//     console.log("Value Removed:" , poppedValue , "\nArray after dequeue:" , array)
// }
// dequeueFromArray(testArray)

// ATTEMPT 2 --- invert, shorten, invert again -- works
function dequeueFromArray2(array){
    let poppedValue = array[0]
    let tempArray = []
    for (let i=0; i<array.length; i++){
        tempArray[i] = array[array.length-(i+1)]
    }
    tempArray.length = tempArray.length-1
    array.length = 0
    for (let i=0; i<tempArray.length; i++){
        array[i] = tempArray[tempArray.length-(i+1)]
    }
    console.log(`Value Removed: ${poppedValue} \nArray after dequeue: ${array}`)
}

dequeueFromArray2(testArray)

// VERSION 3 --- move each up in line - probably simplest
function dequeueFromArray3(array){
    let poppedValue2 = array[0]
    for (let i=0; i<array.length; i++){
        array[i] = array[i+1]
    }
    array.length = array.length-1
    console.log(`Value removed from queue: ${poppedValue2} \nArray after dequeue: ${array}`)
}
dequeueFromArray3(testArray)