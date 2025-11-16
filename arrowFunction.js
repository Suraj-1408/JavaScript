const  myname = (name) => {
    return  "Hello "+name
};

console.log(myname("Suraj"));
console.log("Defining an Array of Objects:");
const arr = [
    {name:"Suraj",age:23},
    {name:"Mayank",age:24},
    {name:"Priyanka",age:21}

];


arr.forEach( person =>{
    console.log(person.name +" is "+person.age +" years Old.");
});
