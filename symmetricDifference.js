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

function sym() {
    let bucket = []
    arr1.forEach( () => {
        for (let j=0; j<arr2.length; j++) {
          if(arr1[i]===arr2[j]) {
              bucket.push(arr1[i])
          }
        }
    })
    return bucket
  }

  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])