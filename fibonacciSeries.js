console.log("Simple program to print Fibonacci Series.");

function printSeries(n){
    let a = 0;
    console.log(a);

    let b = 1;
    console.log(b);
    n = n-2;

    while(n != 0){
        fib = a+b;
        console.log(fib,"\t");
        a = b;
        b = fib;
        n--;
    }
}

printSeries(10);
