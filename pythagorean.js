// Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

function isPythagorean(num1,num2,num3) {
    let numArray = [num1,num2,num3]
    numArray.sort((a,b) => a-b)
    let test = (numArray[0]**2) + (numArray[1]**2) === (numArray[2]**2) ? true : false
    return test
}

console.log(isPythagorean(12,12,5))