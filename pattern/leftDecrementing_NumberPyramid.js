function leftDecrementing_NumberPyramid(num){
    
    for(let i = num; i > 0; i--){
        let count = 1;  //for each rows default the count to 1.

        for(let j = 0 ;j < i;j++){
            process.stdout.write(" "+count.toString()+" ");
            count++;
        }
        console.log("");
    }
}

leftDecrementing_NumberPyramid(5);