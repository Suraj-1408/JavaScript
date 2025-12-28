//      #
//     ##
//    ###
//   ####
//  #####
// ######


function rightAligned(num){
    //outer column iterates over rows starting from num to 0
    for(let i = 0; i < num ;i++){

        //inner loop - column will print required spaces and #. Starts from 0 to j < num - i -1
        //for 1st iteration, inner loop will print 5 spaces due to condition (0 < (6-0-1))
        for(let j = 0; j < num - i -1;j++){
            process.stdout.write(" ");
        }
        
        //now printing # for remaining columns. starting num-i-1 to num ((num-i-1) < num)
        for(let k = num-i-1; k < num;k++){
            process.stdout.write("#");
        }
        console.log("");
    }
}

rightAligned(6);