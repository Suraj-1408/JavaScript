function numberofjumps(x1,v1,x2,v2) {
    //first case if v1 == v2 and their starting position is also same.
    if(v1 === v2){
        return (x1 === x2)?"YES":"NO";
    }
    
    //if v1 != v2. their speeds are not same.
    //therefore for this we need to compute the number of jumps they are making by forming this equation.
    //x1 + k.v1 = x2 + k.v2
    //x1 - x2 = k(v2 - v1)
    //k = (x1 - x2)/(v2 - v1)

    //if (x1 - x2) is divisible by (v2 - v1) and k >= 0 then return YES.
    let posdif = x1 - x2;
    let speeddif = v2 - v1;

    if(speeddif !== 0 && (posdif%speeddif === 0)){
        let jump = posdif/speeddif;

        if(jump >= 0){
            return "YES";
        }
    }

    return "NO";
}


//console.log(numberofjumps(2,1,1,2));
//console.log(numberofjumps(0,3,4,2));
console.log(numberofjumps(0,2,5,3));