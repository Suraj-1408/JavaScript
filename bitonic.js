console.log("Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, find the bitonic point, that is the maximum element in the array.");
console.log("Bitonic Point is a point before which elements are strictly increasing and after which elements are strictly decreasing.");


//finding the first bitonic number.(the element where all its previous elements are smaller and its next elements are smaller.)
const arr1 = [1, 2, 4, 5, 7, 8, 3];
const arr2 = [120, 100, 80, 20, 0];

console.log("Give array elements-\t");
for(let i = 0 ;i < arr2.length;i++){
    console.log(arr2[i],"\t");
}

const bitonic = (arr2)=>{
    //return the previous element as soon as we found current element is less than previous element
    for(let i = 1;i < arr2.length;i++){
        if(arr2[i]<arr2[i-1]){
            return arr2[i-1];
        }
    }
};

const result = bitonic(arr2);
console.log("The bitonic element in the given array is:",result);


