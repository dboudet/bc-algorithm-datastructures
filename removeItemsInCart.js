const shoppingList = ['bread','eggs','milk','beer','peanuts','shampoo','spinach']
const inCart = ['apples','bananas','bread','peanuts','milk']

// FIRST ATTEMPT
// function removeItemsInCart(arr1,arr2) {
//     let newShoppingList = shoppingList

//     arr1.forEach(currentItem => {
//         for (let i=0; i<arr2.length; i++) {
//             if(arr2[i] === currentItem) {
//                 shoppingList.splice(currentItem, 1)
//             }
//         }
//     })
//     return newShoppingList
// }
// console.log(removeItemsInCart(shoppingList,inCart))

// SECOND ATTEMPT
// function removeItemsInCart(arr1,arr2) {
//     let newShoppingList = arr1.filter((arr1[i],arr2[j]) => {
//         return arr1[i] !== arr2[j]
//     })
// }
// console.log(removeItemsInCart(shoppingList,inCart))

function checkCart(item) {
    if(!inCart.includes(item)) {
        return item
    }
}
let newShoppingList = shoppingList.filter(checkCart)

console.log(`Shopping List: \n ${shoppingList}\n In Cart: \n ${inCart} \n With Items in Cart Removed: \n ${newShoppingList}`)