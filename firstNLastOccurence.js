//Input: arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
//INPUT2 = const arr = [6 6 6 6 7 7 7 8];
function findFirstNLastOcc(arr,x){
    const result = [-1,-1];
    
    //if Single element
    if(arr.includes(x)){
        let count = arr.filter(ele => ele == x).length;
        
        if(count == 1){
            result[0] = arr.indexOf(x);
            result[1] = arr.indexOf(x);
            return result;
        }
    }

    //if elements have more than one occurrence
    for(let i = 0;i < arr.length;i++){

        //check if index value == x
        if(arr[i] == x){

            //check if first occurrence already present.
            if(result[0] == -1){
                result[0] = i;
            }else{  //keep updating the 1st index until last occurrence not found.
                result[1] = i;
            }
        }
    }
    
    return result;
}


//function call-
//const arr1 = [1, 3, 5, 5, 5, 5, 67, 123, 125];
const arr = [6 ,6 ,6, 6 ,7 ,7, 7, 8];
console.log("Given array elements are:\n");
for(let i = 0;i < arr.length;i++){
    console.log(arr[i]," ");
}
const input = console.log("Element searching 8\n");


const finalResult = findFirstNLastOcc(arr,8);

if(finalResult[1] != -1){
    console.log("Given element found at following indexes:\n",finalResult);
}else{
    console.log("Given input not found in array:",finalResult);
}

