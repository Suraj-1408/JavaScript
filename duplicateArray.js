// Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

// Note: You can return the elements in any order but the driver code will print them in sorted order.

const arr = [2,3,1,2,3];

// function duplicates(arr){
//     const result = arr.filter(e => arr.has(e));

//     console.log(result);
// }

// duplicates(arr);

// function findDuplicate(arr){
//     const result = [];
//     //for each element check whether it exist further or not.
//     for(let i = 0 ;i < arr.length;i++){
//         let num = arr[i];
//         for(let j = i+1; j < arr.length;j++){
//             if(arr[j] == num){
//                 //result.add(num);
//                 result.push(num);
//             }
//         }
//     }
//     return result;
// }


// console.log("Duplicates found in resultant is:\n",findDuplicate(arr));



//second approach - Time Limit Exceeds
function duplicates(arr){
    const result = arr.filter(e => arr.includes(e) && arr.indexOf(e) != arr.lastIndexOf(e));
    //now again applying filter to keep only the first occurrence of duplicates elements.
    console.log("Duplicates elements in the given array:",result);
    const unique = arr.filter((e,i) => result.indexOf(e) === i);

    return unique;
}

console.log("Unique element from duplicate array:",duplicates(arr));