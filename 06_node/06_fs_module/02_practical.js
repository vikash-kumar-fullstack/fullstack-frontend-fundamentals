const fs = require("fs")


// ------------------------------------------------
// 1 Write File
// ------------------------------------------------
fs.writeFile("demo.txt","Hello from Node.js\n",(err)=>{
 if(err) throw err
 console.log("File created")
})


// ------------------------------------------------
// 2 Append File
// ------------------------------------------------
fs.appendFile("demo.txt","Appending new line\n",(err)=>{
 if(err) throw err
 console.log("Data appended")
})


// ------------------------------------------------
// 3 Read File (Async)
// ------------------------------------------------
fs.readFile("demo.txt","utf8",(err,data)=>{
 if(err) throw err
 console.log("\nFile Content:")
 console.log(data)
})


// ------------------------------------------------
// 4 Rename File
// ------------------------------------------------
fs.rename("demo.txt","updated_demo.txt",(err)=>{
 if(err) throw err
 console.log("File renamed")
})
