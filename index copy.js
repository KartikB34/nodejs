const fs = require("fs");

// fs.readFile("./sample.txt", "utf-8", (err,data) => {                   //Asynchronous method
//     if(err){
//       throw err;
//     }
//     console.log(data);
// });   


const a =  fs.readFileSync("./sample.txt", "utf-8")                   //Synchronous method

const b = "The name is KING CRUCIO";
fs.writeFileSync("./hello.txt", b, ()=> {
    console.log("Written completed")
})
 
console.log(a)
console.log("Will I be printed last? :( ")