// do all the numbers in the first array fall in the range (between - not inclusive) the numbers in a second array 
arr1 = [1,2,3,4]
arr2 = [0,6] // should return true

arr1a = [3,1]
arr2a = [4,0] // should return true

arr1b = [9,9,8]
arr2b = [8,9] // should return false

arr1c = [1,2,3,4]
arr2c = [2,3] // should return false

arr3 =[] // what happens if one array is empty? need to define what outcomes are expected.

function canNest(array1, array2) {
    // first find min and max of second array (boundaries)
    let lowerBoundary = array2[0]
    let upperBoundary = array2[0]
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] < lowerBoundary) {
        lowerBoundary = array2[i]
      }
      if (array2[i] > upperBoundary) {
        upperBoundary = array2[i]
      }
    }
    // compare numbers in first array to boundaries
    for (let i=0; i<array1.length; i++) {
        if(array1[i] <= lowerBoundary || array1[i] >= upperBoundary) {
            return false
        } else {return true}
    }
}
console.log(canNest(arr2,arr3))