//Input  arr = [1,2,3,7,5]
// function firstSubArraySumAfterMeetingTarget(arr,target){
//     let currSum = 0;
//     let start = 0;
//     let result = [-1];
//     for(let end = 0;end < arr.length;end++){
//         currSum = currSum + arr[end];

//         if(currSum == target){
//             result[0] = start;
//             result[1] = end;

//             return result;
//         }

//         else if(currSum > target){
//             currSum = currSum - arr[start];
//             start++;
//         }
//     }

//     return result;
// }

//Problem Statement
// Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

//Note: If no such array is possible then, return [-1].

//IMPORTANT-
//Logic we need to ensure our subarray window doesn't exceeds the target.
//If subarray exceeds the target , reduce the element from start index UNTIL  subarray condition isn't satisfied.
//Subarray condition - Sum(Subarray elements) <= target.

//Steps - 
//1) Keep Adding element into subarraySum
//2) Check if Subarray sum exceeds given target, remove elements from start of subarray to satisfy the Subarray condition.
//3) Next check if subarray sum matches target, if yes , the update result array and return it.


function firstSubArraySumMeetingTarget(arr,target){
    let subarraySum = 0;
    let start = 0;      //keep start of start index of subarray
    let result = [-1];
    for(let end = 0;end < arr.length;end++){

        //add the current into subrray.
        subarraySum = subarraySum + arr[end];

        //no use of comparing subarray sum with target, HENCE before comparing satisfy subarray condition.
        while(subarraySum > target && start < end){
            subarraySum = subarraySum - arr[start];
            start++;
        }

        //compare subarraySum with target
        if(subarraySum == target){
            result[0] = start+1;        //Adding +1 since expected index must start from 1 and not 0.
            result[1] = end+1;

            return result;
        }
    }

    return result;
}
const arr = [1,2,3,7,5]
console.log(firstSubArraySumMeetingTarget(arr,12))