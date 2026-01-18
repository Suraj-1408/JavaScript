//Returns number of opertions needed to so that all layers in computationTime arr is odd.

function getMinoperations(arr){

    let operations = 0;
    if(arr.length === 0){
        return operations;
    }

    for(let i = arr.length -1;i >= 0;i--){
        if(arr[i] % 2 == 0){
            operations = operations + makeOdd(arr[i]); 
        }
    }
    return operations;
}

//helper function
function makeOdd(num){
    while((num%2 !== 0)){
        num = num/2;
    }
    return 1;
}

const computationTime = [1,9,5];
const computationTime1 = [2,4,8,16];
//const size = computationTime.length;
const result = getMinoperations(computationTime);

console.log("Operations required:",result);