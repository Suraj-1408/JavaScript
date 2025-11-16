console.log("\t\tGiven an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.\n\n");

const arr = [10,8,30,4,5];
console.log("Given array elements:\t");

for(let i = 0;i < arr.length;i++){
    console.log(arr[i],"\t");
}

function findIndex(arr,x){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == x){
            return i;
        } 
    }
    return -1;
}
//console.log("Enter element to be searched for:");
const readlineSync = require('readline-sync');
const input = readlineSync.question("Enter element to be searched for:");
const result = findIndex(arr,input);

if(result >= 0){
    console.log("\nElement found at index ",result);
}
else{
    console.log("\nElement not found:",result);
}