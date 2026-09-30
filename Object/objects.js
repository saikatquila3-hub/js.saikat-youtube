
const mySym=Symbol("key1");
const jsUser={
     name:"Saikat",
    [mySym]:"mykey1",
     age:18,
    location:"Mecheda",
     Email:"saikat@123gmail.com",
    IsLoogined:false,
}
//  console.log(jsUser.age);
//  console.log(jsUser["name"]);


//symbol declearation

// console.log(jsUser["mySym"]);
jsUser.greeting=function(){
    console.log("Hello js server")
}
jsUser.greeting1=function(){
    console.log(`Hello js server,${this.name}`)
}
console.log(jsUser.greeting);
console.log(jsUser.greeting1);


