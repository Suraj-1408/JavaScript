// Given a string s consisting of lowercase English Letters. return the first non-repeating character in s. If there is no non-repeating character, return '$'.

// Examples:

// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.

//solving using hashmap.
function firstNonRepeating(str){
    let result = '$';
    const hashmap = new Map();
    
    //iterating over each character  and storing each character count in map.
    for(let i = 0; i < str.length;i++){
        let count = 1;
        //check if character is present in map or not, if present update count else, add it in map.
        if(hashmap.has(str.charAt(i))){
            let currentCount = hashmap.get(str.charAt(i));
            hashmap.set(str.charAt(i),currentCount+1); 
        }
        else{
            hashmap.set(str.charAt(i),count);
        }
    }


    //traversing hashmap.
    for(let [key,count] of hashmap){
        console.log(`Character:${key} ,count:${count}`);
        
        if(key && count === 1){
            result = key;   //update the result.
            return result;
        }
    }
    return result; 
}

const str = "geeksforgeeks";
const firstNonRepeatingCharacter = firstNonRepeating(str);  

console.log("First non repeating character in this given string ",str," is:",firstNonRepeatingCharacter);