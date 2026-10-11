let a=80
if(true){
    let a=10
    const b=50
    console.log("INNER SCOPE",a);
    // in the scope (symbol of scope{}) if you print a that is print a=10 means
    //the actual value of a .
}

console.log(a); //In the outside of the scope a is print the outside
               //scope value means a =80.



//NESTED SCOPE

function one(){
     const name="Saikat Quila"

     function two(){
        const website="Youtube"
        console.log(name);
     }
     console.log(website);
     two();
}
one();


//Two ways of function declearation in js 
function addone(){
    return num+1
}
// variable can stores in any function beacuse js is very powerfull in javascript.
const addTwo=function(num){
    return num+2
}