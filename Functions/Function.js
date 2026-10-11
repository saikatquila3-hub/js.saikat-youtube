// function sayMyname(){
//    console.log("saikat")
//    console.log("Quila")
// }

// sayMyname();


function addTwoNumbers(num1,num2){
console.log(num1+num2);
}

// addTwoNumbers(3,7)

function addcalculatePrice(...num1){
   return num1

}
// console.log(addcalculatePrice(200,600,700));


const user={
   Username:"Laddu",
    price:199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.Username} and price is ${anyobject.price}`);
   
}
handleObject(user);



// Arrays passing


const myNewArray=[200,309,466]
function returnSecondValue(getArray){
   return getArray(1)
}

console.log(returnSecondValue([200,400,600,700]));
