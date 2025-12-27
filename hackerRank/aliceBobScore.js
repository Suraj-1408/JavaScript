function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for(let i = 0; i < a.length && i < b.length;i++){
        if(a[i] > b[i]){
            aliceScore++;
        }
        else if(a[i] < b[i]){
            bobScore++;
        }
    }
    
    const sbScore = [aliceScore,bobScore];
    return sbScore;
}


const a = [17,28,30];
const b = [99,16,8];

console.log(compareTriplets(a, b));