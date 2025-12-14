//Understanding Heap Data

//1)Heap is complete binary tree based data structure used to store elements effectively "by satisfying the heap"
//property".
//2)A complete Binary Tree - All levels in tree are filled strictly from Left to Right.
//3)Heap data structure must satisfy the heap property.
//4)There are two types of Heap - Max Heap & Min Heap.
//5)Max Heap - Any node in tree is always "Greater than or equal to child node". The parent node is largest.
//6) Min Heap - any node in tree is always "Less than or equal to its child node". The root node is smallest.



//FURTHER VERY IMPORTANT INITIALIZATION-

//WHY N/2 IS LEAF NODE

//Since A Heap is complete binary tree - the nodes are inserted from left to right.

//The leaf node are from n/2 .... to n-1
//Reason.
//Assume n =  7 with array indexes = 0,1,2,3,4,5,6
//on dividing n/2 i.e 7/2 = 3.

//now if we TRY TO FIND OUT CHILDS FOR INDEX 3, LETS FIND OUT IT "LEFT CHILD" USING 2*i + 1;
//2*(3) + 1 = 7 , as you can see here result index is 7 BUT our given elements in array doesn't exceeds 
//index 6.
// Therefore since 2*(3)+1 = 7 > 6(last index of given array). we can strongly its child for index 3
//doesn't exist.
//Hence node at Index 3 is "LEAF NODE" which can be found initialised as n/2.
//Furthe USING THIS N/2 WE CAN FINF OUT LAST NON LEAF NODE IS (N/2 -1)




//function to implement Min Heap where any node i is always less than equal to child node.
//Note - here given array elements is not heap, hence we need to make it heap first.
//STEPS TO MAKE GIVEN ELEMENT IN ARRAY A HEAP.

//Using Heapify Up(i.e comparing current child wiht it parents)
//1)START WITH LAST INDEX ELEMENT OF ARRAY.
//2) Compare last index value its parents.
//3) 




//Steps to make the given array elements to satisfy min Heap. - INTUITION is WRONG IN THIS.

//1)loop from last index element until n > 0.
//2)get current Index value.
//3)get the parent element of that current index element using  (i-1)/2
//4)compare the current index element and Parent node , if child element(CurrentIndex )< parent, Swap.
//5)Reduce n--

// function makeHeap(arr){

//     let len = arr.length;

//     while(len > 0){
//         console.log("Current len:",len);

//         //current Index value.
//         let childIndex = len-1;
//         console.log("Current ChildIndex:",childIndex);
//         //parent of currentIndex(Child)
//         //let currParent = (int(childIndex -1)/2);
//         let currParent = Math.floor((childIndex - 1) / 2);
//         // console.log("Index of Current Parent:",currParent);
//         // console.log("Current parent Node:",currParent);
//         if(arr[childIndex] <= arr[currParent]){
//             console.log("Before Swap Child value:",arr[childIndex]);
//             console.log("Before Swap Parent Value:",arr[currParent]);
//             let temp = arr[currParent];
//             console.log("TEMP:",temp);
//             arr[currParent] = arr[childIndex];
//             console.log("CURRENT PARENT:",currParent);
//             arr[childIndex] = temp;
//             console.log("CHILD Value:",arr[childIndex]);

//             console.log("After FINAL Swap Child Value:",arr[childIndex]);
//             console.log("After FINAL Swap Parent Value:",arr[currParent]);
//         }
//         len--;
//         console.log("After first Iteration len:",len);
//         console.log("\n\n");
//     }

//     const min = arr[0];
    
//     return min;
// }   

// //const arr = [2,5,6,1,3];
// const arr = [9, 4, 7, 1, -2, 6, 5];

// for(let i = 0 ;i < arr.length;i++){
//     console.log(arr[i]);
// }
// const result = makeHeap(arr);
// console.log(result);


// console.log("After function array eleemnts:");
// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }



//CORRECT INTUITION -
//1) AT ANY GIVEN STEP FOR MIN HEAP, THE PARENT NODE <= CHILD NODE'S.(ALSO CALLED INVARIANT)
//2) FOR THIS PROBLEM - LEAF NODES ARE ALREADY MIN HEAP AS THEY SATISF THE MIN HEAP CONDITION.
//3) DIRECTIONT MUST BE FROM LEAF NODE TO ROOT NODE . IN ORDER TO SOLVE THE PROBLEM.
//4) THEREFORE START FROM LAST NON LEAF NODE TO ROOT NODE ,AND TRY SATISFYING THE HEAP CONDITION ,WE CAN SOLVE THIS.
//5) TRAVERSING FROM LAST NON LEAF NODE TO ROOT.
//6) COMPARING ITS PARENT NODE TO WITH ITS CHILDRENS.
//7) DOING Swap IF ANY CHILD IS LESS THAN ITS PARENT.


// function minHeap(arr){

//     let lastNonLeafNode = Math.floor(arr.length/2 - 1);

//     while(lastNonLeafNode > 0){
//         let leftChild = (2*lastNonLeafNode) + 1;
//         let rightChild = (2*lastNonLeafNode) + 2;

//         if(arr[rightChild] <= arr[lastNonLeafNode]){
//             let temp = arr[rightChild];
//             arr[rightChild] = arr[lastNonLeafNode];
//             arr[lastNonLeafNode] = temp;
//         }

//         else if(arr[leftChild] <= arr[lastNonLeafNode]){
//             let temp2 = arr[leftChild];
//             arr[leftChild] = arr[lastNonLeafNode];
//             arr[lastNonLeafNode] = temp2;
//         }

//         lastNonLeafNode--;
//     }

//     return arr[0];
// }


// const arr = [9, 4, 7, 1, -2, 6, 5];
// const result = minHeap(arr);
// console.log(result);



//main function to buildMinHeap()
function buildMinHeap(arr){
    console.log("buildMinHeap Started-")
    let n = arr.length;

    //Inorder to build heap, we make use of heapifyDown approach where we satisfy one subtree and move
    //upward to root , so as to make the complete input as valid heap.

    //steps
    //1)starting from last non leaf node. to root.
    //2)for that nonleaf check if left & right child exist if yes, satisfy the heap property and move on
    //to previous non leaf node.
    //3) Next we make use of helper function , that actually make the heap valid.
    //4) parameter to helper function - arr, n - no of elements and i - node with smallest value.
    
    //note - last non leaf node is computed as - (n/2-1)
    for(let i = Math.floor(n/2 -1); i >= 0 ;i--){
        console.log("Inside loop");
        //calling helper function to make heap valid.
        heapifyDown(arr,n,i);       //here i must be smallest parent node of subtree.
    }

    return arr;
}   


//function to make to heap valid
function heapifyDown(arr,n,i){

    //asuming value at index i is smallest
    let smallest = i;
    
    //computee left and right child indexes.
    let left = (2*(i) + 1);
    let right = (2*(i)+ 2);

    //check left index < n i.e whether child exist for root i.
    if(left < n && arr[left] < arr[smallest]){
        //update smallest index.
        smallest = left;
    }

    if(right < n && arr[right] < arr[smallest]){
        smallest = right;
    }


    //swap this smallest and i index value until value at index i is not smallest,  and call this heapify recursively.
    if(smallest !== i){
        [arr[i],arr[smallest]] = [arr[smallest],arr[i]];
        heapifyDown(arr,n,smallest);
    }
}

const arr = [9, 4, 7, 1, -2, 6, 5];
const result = buildMinHeap(arr);

console.log("Result:",result);