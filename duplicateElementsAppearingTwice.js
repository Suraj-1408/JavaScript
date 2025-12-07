// Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

// Note: You can return the elements in any order but the driver code will print them in sorted order.

function duplicateElements(arr){
    //since we need to return an array containing elements appearing twice.
    //Therefore we need to know count of each elements.

    //1) First using hashmap to get the count of each element.
    const mymap = new Map();
    //iterate over the arr
    //and for each element check whether element exist in map or not
    // if not , then add into map with count 1
    //else update the count.
    let count = 1;      //default count for element will be 1.
    for(let i = 0;i < arr.length;i++){

        //check if element exist
        if(!mymap.has(arr[i])){
            mymap.set(arr[i],count);
        }
        else{
            let getCount = mymap.get(arr[i]);
            mymap.set(arr[i],getCount+1);
        }
    }



    const duplicates = [];
    //next Now COming to main problem objective that is to get duplicate elements.
    for(let [key,count] of mymap){
        let totalcount = mymap.get(key);
        if(totalcount > 1){
            duplicates.push(key);
        }
    }

    return duplicates;
}



const arr = [2, 3, 1, 2, 3];
const duplicateEle = duplicateElements(arr);
console.log(duplicateEle); 