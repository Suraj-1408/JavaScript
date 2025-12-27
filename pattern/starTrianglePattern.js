function starTriangle(num){
    //Iterate over each row,
    //in each print left spaces , * ,and then right spaces.

    for(let i = 0; i < num; i++){

        //for i = 0 row , left spaces can be computed as nums - i - 1
        for(let lf = 0 ; lf < num - i - 1;lf++){
            process.stdout.write("   ");
        }

        //star required can be computed as - (2 * i +1)
        for(let j = 0 ; j < 2 * i + 1;j++){
            process.stdout.write(" * ");
        }

        //right spaces can be computed as (num - i - 1)
        for(let rg = 0; rg < num - i - 1;rg++){
            process.stdout.write("   ");
        }
        console.log("");
    }
}

starTriangle(5);