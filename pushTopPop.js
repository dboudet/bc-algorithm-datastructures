const testArray = [192,2349,2993,933,20,3,88,93]
console.log("Before:", testArray)


// push() - adds item to end of array (top of stack)

function pushToArray(array,num){
    return array[array.length] = num
}
const valueToPush = 63
pushToArray(testArray,valueToPush)
console.log("After Push:", testArray)


// top() - returns value of last item in array
console.log("Top of array is:" , testArray[testArray.length-1]) 


// pop() - removes and returns last item from array
function dbPopArray(array){
    let lastItem = array[array.length-1]
    array.length = array.length - 1
    console.log("popped item was:",lastItem)
    console.log("New array is:", array)
}
dbPopArray(testArray)
