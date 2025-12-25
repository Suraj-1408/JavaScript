// function validParenthesis(str){

//     // let stack  = [];        //empty stack.  USing Array.
    
//     // stack.push("(");
//     // stack.push(")");
//     // stack.push("}");
//     // stack.push("[");

//     // console.log("Elements inside stack is:",stack);
//     // console.log("Size of Stack is:",stack.length);
//     // let len = stack.length;
//     // console.log("Top element in Stack:",stack[len-1]);

//     let stack = [];     //creating a empty stack storing valid parenthesis/

//     for(let i = 0; i < str.length;i++){

//         let ch = str.charAt(i);
//         let size = stack.length;
//         let top = stack[size -1];
        
//         if(stack.length == 0){
//             console.log("Stack is empty.");
//         }

//         if(ch == "(" || "{" || "["){
//             stack.push(ch);
//         }

//         if(ch == ")" && top == "("){
//             stack.push(ch);
//         }

//         else if(top == "(" && ch == "]" || "}"){
//             return false;
//         }

//         if(top == "{"  && ch == "}"){
//             stack.push(ch);
//         }
//         else if(top == "{" && ch == "]" || ")"){
//             return false;
//         }

//         if(top == "[" && ch == "]"){
//             stack.push(ch);
//         }
//         else if(top == "[" && ch == "}" || ")"){
//             return false;
//         }
//     }

//     return true;
// }


// console.log(validParenthesis("()[]{}"));




function  parenthesis(str){
    if(str.length == 1 || str ==""){
        return false;
    }

    let stk = [];
    let top = -1;

    for(let i = 0 ;i < str.length;i++){

        //IF FIRST INDEX ELEMENT ANY CLOSING BRACKES.
        if((i == 0) && ((str[i] == "}") || (str[i] == "]") || (str[i] == "}"))){
            return false;
        }

        //IF IN BETWEENS STACK BECOMES EMPTY AND  CHARACTERS ARE CLOSING BRACKETS -
        if((stk.length === 0) && ((str[i] == "]") || (str[i] == ")") || (str[i] == "}"))){
            return false;
        } 
        //IF ELEMENT IS  ANY OPENING BRACKETS.
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            stk.push(str[i]);
            top++;
        }
        else{

            if((stk[top] == "(" && str[i] !== ")")  || (stk[top] == "[" && str[i] !== "]") || (stk[top] == "{" && str[i]!== "}")){
                return false;
            }

            else{
                stk.pop(str[top]);
                top--;        
            }
        }
    }
    //return true;
    return stk.length === 0;
}


const str1 = "()[]{}";
const str2 = "(]";
const str3 = "()";
const str = ")[]";
//parenthesis(str);

console.log(parenthesis(str));




//PRACTICE FOR CHECKING ISEMPTY  
// function parent(){
//     let stk = [];

//     stk.push("[");
//     // stk.push("(");
//     // stk.push("{");
//     // stk.push(")");

//     stk.pop("[");

//     console.log("Elements of Stack is:",stk);
    
//     return stk.length === 0;
// }

// console.log("Return value of function:",parent());
