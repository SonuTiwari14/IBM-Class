// console.log(this)

// let obj={
//     name:"sonu tiwari",
//     class:"B.Tech",
//     myfunction:function(){
//         console.log(this)
//         console.log(this.name, this.class )
//         console.log("I am sonu")
//     },
//     sub:["cn","dbms","eng"],
//     newObj:{
//             1:12,
//         mynewfunction:function(){
//             //console.log(this)
//             return this[1]
//         }
//     }

// }
// console.log(obj)
// console.log(obj.myfunction)
// console.log(obj.newObj.mynewfunction)

// // 00000000

// let obj1={
//     name="sonu tiwari",
//     class="B.Tech",
//     myfunction:() => {
//         //console.log(this)
//         //console.log(this.name, this.class )
//         console.log("I am sonu");
//     },
//     sub:["cn","dbms","eng"],
//     newObj:{
//             1:12,
//         mynewfunction:function(){
//             //console.log(this)
//             return this[1]
//         }
//     }    
    
// }
// //

//condition

let num1= 10,  num2=20;

if(num1<num2){
    console.log(` ${num1} is less than ${num2}` );
}else if(num1>num2){
    console.log(` ${num1} is greater than ${num2}` );
}


//let's suppose you have one num as input you have to check if num is multiple of 3 than print "Fizz",if num is multiple of 5 than print "Buzz", if num is multiple of both 3 and 5 than print "FizzBuzz".

// let num = prompt("Enter a number");
// if(num % 5 === 0 && num % 3 === 0) {
//     console.log("Fizz Buzz");
// }
// else if(num % 5 === 0) {
//     console.log("Fizz");
// }
// else if(num % 3 === 0) {
//     console.log("Buzz");
// }
// else {
//     console.log("no output");
// }

// let num=30;

// for (let i=3; i<=num;i++){
//     console.log(i)
// }

// let arr=[1,2,3,4,5,6,7,8]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i], i);
// }


let str= "Sonu Tiwari";

for (let i=0; i<str.length; i++){
    console.log("s"+str[i],"t")
}