// //Given two strings s1 and s2. Return true if the string s2 can be obtained by rotating (in any direction) string s1 by exactly 2 places, otherwise, false.
// Note: Both rotations should be performed in same direction chosen initially.
// Input: s1 = "amazon", s2 = "azonam"
// Output: true
// Explanation: "amazon" can be rotated anti-clockwise by two places, which will make it as "azonam".

//brute force - making use of extra space.
//1)Create new array of same.
//2)Update the first index with last character of given string.
//3)Fill remaining characters.

function stringRotate(s1,s2){

    let arr1 = [];
    const arr2 = [];

    const leftdir = "left";
    const rightdir = "right";
    
    if(rightdir == "right"){
        let lastChar = s1[s1.length-1]; 
        arr1[0] =  lastChar;

        //iterate over give s1 and update arr1.
        for(let i = 0;i < s1.length-1;i++){
            //getting the last character.    
            
            // if(i === 0){
            //     let lastChar =s1[s1.length-1];
            //     //console.log(lastChar);
            //     arr1[i] = lastChar;
            //     //console.log("At arr[",i,"] is:",arr1[i]);
            // }
            // arr1[i] = s1[i];
            // console.log("At arr[",i,"] is:",arr1[i]);
            arr1[i+1] = s1[i];
        }
        //console.log("Arrray1:",arr1);

        let lastChar1 = arr1[arr1.length-1];
        arr2[0] = lastChar1;

        for(let j = 1;j < arr1.length-1;j++){
            arr2[j] = arr1[j];
        }

        const str = arr2.join("");
        // console.log("Data inside str:",str);
        // console.log("S2:",s2);
        if(str.toLowerCase() === s2){
            return true;
        }
    }
     if(leftdir === "left"){
        console.log("inside left");
        let a1 = [s1.length];
        let a2 = [a1.length];

        a1[s1.length-1] = s1[0];
        
        for(let i = 1;i < s1.length;i++){
            a1[i-1] = s1[i];

        }
        //console.log("a1:",a1);   
        
        a2[a1.length-1]  = a1[0];
        for(let j = 1;j < a1.length;j++){
            a2[j-1] = a1[j]
        }
        //console.log(a2);
        const str2 = a2.join("");
        if( str2.toLowerCase() === s2){
            return true;
        }
    }
    //console.log("Array2:",arr2);
    return false;
}
//Amazon

const result = stringRotate("Amazon","azonam");
console.log(result);
