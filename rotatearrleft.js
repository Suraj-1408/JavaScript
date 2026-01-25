function  rotateArr(arr, d) {
        // code here
        
        //1)first rotate d elements.
        //2) Rotate remaining elements.
        //3) reverse the arr.
        
        let s = 0;
        let e = d-1;
        for(let i = 0;i < d/2;i++){
            let first = arr[i];
            console.log("first:",first);
            arr[i] = arr[e];
            console.log("arr[",i,"]:",arr[i]);
            arr[e] = first;
            console.log("arr[",e,"]:",arr[e]);
            s++;
            console.log("S:",s);
            e--;
            console.log("e:",e);
        }
        console.log("swapping upto d:",arr);
        
        let s1 = d;
        console.log("s1:",s1);
        let e1 = arr.length-1;
        console.log("e1:",e1);
        for(let i = s1;i < (arr.length - d)/2;i++){
            let second = arr[i];
            console.log("second:",second);
            arr[i] = arr[e1];
            console.log("arr[",i,"]:",arr[i]);
            arr[e1] = second;
            console.log("arr[",e,"]:",arr[e1]);
            s1++;
            console.log("s1:",s1);
            e1--;
            console.log("e1:",e1);
        }

        console.log("Swapping d to arr length:",arr);
        
        let start = 0;
        let end = arr.length-1;
        for(let j = 0;j < end;j++){
            start = arr[end];
            arr[end] = arr[j];
            arr[j] = start
            start++;
            end--;
        }        
}

const arr = [1,2,3,4,5];
console.log(rotateArr(arr,2));

