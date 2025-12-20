//Find the length of longest unique sustring.

//1)Store frequency of each character using hapmap.
//2)Iterate over given string, check its count. 
//3)     If count is 1 - increment length
//4)     Satisfy window until all characters are unique.(chartAt(i).hasMap() && left <= i)
//5)Update the maxlenght if currlength > maxlen. 


//CORRECT APPROACH
//NOTE- SINCE WE REQUIRE FREQUENCY OF EACH CHARACTER.
//SO THEREFORE MAP MUST BE BUILT DYNAMICALLY INSIDE THAT WINDOW PATTERN, INSTEAD OF ALREADY PRECOMPUTING IT.
//MISTAKE - PRECOMPUTED THE OCCURRENCE OF EACH CHARACTER ALREADY AND THEN USING IT FOR WINDOW VALIDATION PATTERN.
//APPROCH - BUILD MAP INSIDE WINDOW PATTERN.

function lengthOfLongestSubstring(str){
    
    //storing frequency in map. - NOT REQUIRED , WE MUST BUILD DIRECTLY BUILD IT INSIDE WINDOW PATTERN.
    let count = 1;
    // const freq = new Map();
    // for(let i = 0; i < str.length;i++){

    //     if(!freq.has(str.charAt(i))){
    //         freq.set(str.charAt(i),count);
    //     }
    //     else{
    //         let currCount = freq.get(str.charAt(i));
    //         freq.set(str.charAt(i),currCount+1);
    //     }
    // }


    //getting length of longest substring.
    const freq1 = new Map();
    //let currentLen = 0;
    let maxLen = 0;
    let start = 0;          //to keep track of start index of subarray.

    for(let i = 0 ;i < str.length;i++){

        //check if character presnt in map and update count.
        if(!freq1.has(str.charAt(i))){
            freq1.set(str.charAt(i),count);
            //currentLen++;
        }else{
            let currentKeycount  = freq1.get(str.charAt(i));
            freq1.set(str.charAt(i),currentKeycount+1);
        }


        //check whether the window is valid or not.
        //If not , statisfy the window, when the window will get INVALID (count > 2).
        //therefore to make it valid remove the update count - 1 and 
        // update start index(i.e removed that character occurrence from map.)
        while(freq1.get(str.charAt(i)) > 1){
            //reduce count(value) of that character by 1.
            let getCount = freq1.get(str.charAt(start));
            freq1.set(str.charAt(start),getCount - 1);

            //update start index , basically removing the that one character occurrence from map.
            start++;
            //currentLen--;
        }
        
        
        //now update final maxlen value.
        //maxLen = (currentLen > maxLen) ? currentLen : maxLen;
        maxLen = Math.max(maxLen , i - start +1);
        
    }
    //printing the hashmap
    // console.log("Printing frequency of each character:\n");
    // for(let [key,count] of freq){
    //     console.log(`Key:${key} & Count:${count}`);
    // }
    return maxLen;
}


const input = "abcabcbb";
console.log("Given string is:",input);
const res = lengthOfLongestSubstring(input);
console.log(res);