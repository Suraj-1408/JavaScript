function checkBalString(str){

    let evenSum = 0;
    let oddSum  = 0;
    for(let i = 0;i < str.length;i++){
        if(i % 2 == 0){
            evenSum = evenSum + Number(str.charAt(i));
        }
        else{
            oddSum = oddSum + Number(str.charAt(i));            
        }
    }

    if(evenSum == oddSum){
        return true;
    }

    return false;
}

const input = "24123";
const input1 = "1234";
console.log(checkBalString(input1));