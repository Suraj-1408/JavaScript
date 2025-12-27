// function fullStar(rows,cols){
//     //Iterates over each rows and print cols for that row.
//     for(let i = 0; i < rows;i++){
//         //print * for that rows.
//         for(let j = 0; j < cols;j++){
//             //console.log(" * ");
//             //print(" * ");
//             process.stdout.write(" * ");
//         }
//         console.log("");        //by default adds a new line.
//     }
// }

// fullStar(5,5);



//Left Growing Pyramid.
function leftStar(rows){
    //Iterates over each rows and print cols for that row.
    for(let i = 0; i < rows;i++){
        //print * for that rows.
        for(let j = 0; j <= i;j++){
            //console.log(" * ");
            //print(" * ");
            process.stdout.write(" * ");
        }
        console.log("");        //by default adds a new line.
    }
}

leftStar(5);