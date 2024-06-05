// >> resuse it
// >>

function sum(a,b,c){
    console.log(a+b+c)
}
// sum(10,20,30)// user 
// sum(30,67,90)

// any program
// modular >> changes

// table 2
// program
// 5 10 50


// return keyword

function sum1(a,b,c){
    console.log(a+b+c);//110
    return a+b+c; //110
    
    // var a;
}
console.log(sum1(20,30,60) )
// 110

function abc(){
    let a=120+67+78
    return 0
}
console.log(abc())

//use of writing >>
// function >annoymous +arraor+iife ..etc 
// 

function xyz(){
    console.log(89)// 89 cannot be outside >> printing inside the function
    // u can reuse the value
}
let a=xyz()
console.log("Exe",a)

// function with return keywords
// reuse

function pqr(){
    // console.log(89)// 89 cannot be outside >> printing inside the function
    // u can reuse the value
    return 89
    // not printing the values 
}
let b=pqr() //89 is the value 
console.log("Exe111",b)

console.log(b+100)

function displayoutput(n){
    console.log("taken from another function",n)
}
displayoutput(b)

// cal> sum === cal per ==== cpga scores


function total(eng,math,bio){
    return eng+math+bio
}
let marksScored=total(23,56,80)
console.log(marksScored) // 159 m going resue it

function calper(x){
// console.log(x/300*100,"%")
return x/300*100
}
// calper(marksScored)
let per=calper(marksScored)

// cal cpga
function cpgaGrade(w){
    console.log(w)
}
cpgaGrade(per)

// 5.4 A 
