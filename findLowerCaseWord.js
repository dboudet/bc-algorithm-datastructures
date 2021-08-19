// put together a word that is hidden in lowercase among uppercase letters

testString = "UcUNFYGaFYFYGtNUH"
testString2 = "uAITKWF9nASIFcALLlNBUReIIIIII"
testString3 = null

function detectWord(str) {
    let searchResult = str.match(/[a-z]/g)
    let foundWord = searchResult.join("")
    return foundWord
}

console.log(detectWord(testString2))
