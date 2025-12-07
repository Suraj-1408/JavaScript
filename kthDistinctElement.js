// Input: 
// n = 6, k = 2
// arr = {1, 2, 1, 3, 4, 2}
// Output:
// 4
// Explanation: 1st distinct element will be 3
// and the 2nd distinct element will be 4. As 
// both the elements present in the array only 1 
// times.


function findKthDistinctElement(arr,k){
    //we need to find the kth distinct element from the given elements.
    //1)We can make use of Hashmap to get the count of each element.
    const mymap = new Map();        //declaring this map to store count of each element in the array.
    let count = 1;              //assuming count of each element in map is initially one.
    for(let i = 0;i < arr.length;i++){
        //first check if element exist in hashmap or not.
        if(!mymap.has(arr[i])){
            mymap.set(arr[i],count);
        }
        else{
            let currentCount = mymap.get(arr[i]);
            mymap.set(arr[i],currentCount+1);   
        }
    }


    //2)step2- iterate over the hashmap and
    //check if element count is 1(Means its the distinct element),
    //if Yes, increment a newcounter to check is it the kth index , if yes return that.
    for(let [key,value] of mymap){
        console.log("Inside HashMap:",key);
        //let i = 0;

        let currentKeyValue = mymap.get(key);
        if(currentKeyValue == 1){
            console.log("Checking key -",key);
            // i++;

            // if(i == k){
            //     console.log("Checking i:",i," and k:",k);
            //     let kthDistinctElement = key;
            //     console.log("value inside:",kthDistinctElement);
            //     return kthDistinctElement;
            // }
            k--;

            if(k == 0){
                return key;
            }
        }
    }   
}

const arr = [1, 2, 1, 3, 4, 2];
const k = 2;
const result = findKthDistinctElement(arr,k);
console.log("Given Kth:",k," distinct element in given array is;",result);