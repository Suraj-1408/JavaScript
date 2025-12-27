//Each row contains same numer 1 , 22 ,333 ,.....
function leftNumberPyramid(rows){

    let count  = 1;        
    //iterate over each rows
    for(let i = 0; i < rows; i++){
        
        //iterate over each column and print number.
        for(let j = 0; j <= i;j++){
            process.stdout.write(" "+count.toString()+" ");
            
        }
        count++;
        console.log("");
    }
}

leftNumberPyramid(5);