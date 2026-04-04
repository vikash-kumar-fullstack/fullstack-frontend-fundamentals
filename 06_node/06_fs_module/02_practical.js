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


// ------------------------------------------------
// 5 Stream Reading
// ------------------------------------------------
console.log("\nReading file using stream")

const readStream = fs.createReadStream("updated_demo.txt","utf8")

readStream.on("data",(chunk)=>{
 console.log("Chunk:",chunk)
})

readStream.on("end",()=>{
 console.log("Finished reading file")
})


// ------------------------------------------------
// 6 Stream Writing
// ------------------------------------------------
console.log("\nWriting file using stream")

const writeStream = fs.createWriteStream("stream_output.txt")

writeStream.write("Stream writing line 1\n")
writeStream.write("Stream writing line 2\n")

writeStream.end()

console.log("Stream writing completed")


// ------------------------------------------------
// 7 Buffer Example
// ------------------------------------------------
console.log("\nBuffer Example")

const buffer = Buffer.from("Hello Node Buffer")

console.log(buffer)

console.log("Buffer to String:",buffer.toString())


// ------------------------------------------------
// 8 Delete File
// ------------------------------------------------
setTimeout(()=>{
 fs.unlink("updated_demo.txt",(err)=>{
  if(err) throw err
  console.log("\nFile deleted")
 })
},3000)
