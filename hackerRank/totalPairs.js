
function sockMerchant(n, ar) {
    // Write your code here
    const colorcount = new Map();
    let count = 1;      //default count for each color is one.
    
    for(let i = 0 ;i < ar.length;i++){
        //check if map contains this color.
        if(!colorcount.has(ar[i])){
            colorcount.set(ar[i],count);
        }
        else{
            let currentCount = colorcount.get(ar[i]);
            colorcount.set(ar[i],currentCount+1);
        }
    }
    
    
    //iterate over map
    let pair = 0;
    for(let [key,count] of colorcount){
        let totalcount = colorcount.get(key);
        let result = Math.floor(totalcount/2);
        
        pair = pair + result;
    }

    return pair;
}

let n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const result = sockMerchant(n, ar);
console.log(result);