function leftNumberPyramid(rows){

    //iterate over each rows
    for(let i = 0; i < rows; i++){
        let count = 1;  //using to print actual number and always defaults to 1 for new row.
        //iterate over each column and print number.
        for(let j = 0; j <= i;j++){
            process.stdout.write(" "+count.toString()+" ");
            count++;
        }
        console.log("");
    }
}

leftNumberPyramid(5);

