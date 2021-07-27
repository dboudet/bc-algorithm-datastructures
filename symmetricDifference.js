// function sym(arr1,arr2) {
//     let bucket = []
//     for (let i = 0; i<arr1.length; i++) {
//       for (let j=0; j<arr2.length; j++) {
//         if(arr1[i]===arr2[j]) {
//           bucket.push(arr1[i])
//         }
//       }
//     }
//     for (let k=0; k<arr2.length; k++){
//       for (let l=0; l<arr1.length; l++){
//         if(arr2[k]===arr1[l]){
//           bucket.push(arr2[k])
//         }
//       }
//     }
//     return bucket
//   }


// NOT WORKING

// function sym() {
//     let bucket = []
//     arr1.forEach( () => {
//         for (let j=0; j<arr2.length; j++) {
//           if(arr1[i]===arr2[j]) {
//               bucket.push(arr1[i])
//           }
//         }
//     })
//     return bucket
//   }


// function sym(arr1,arr2) {
//   let bucket = []
//   arr1.forEach( num => {
//     for (let j=0; j<arr2.length; j++) {
//       if(num!==arr2[j]) {
//         bucket.push(num)
//       }
//     }
//   })
// }


function sym(arr1,arr2) {
  let bucket  = []
  for (let i=0; i<arr1.length; i++) {
    arr2.forEach( (arr2, num) => {
      if(arr1[i] != num) {
        bucket.push(num)
      }
    })
  }
}
// console.log( bucket )

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5]))