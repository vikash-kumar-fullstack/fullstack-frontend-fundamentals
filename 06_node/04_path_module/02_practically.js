// Import path module
const path = require("path")

console.log("============== NODE PATH MODULE DEMO ==============\n")

// Example path
const filePath = "D:/nodejs/html/js/app.js"

console.log("Original Path:", filePath)


// --------------------------------------------------
// basename()
// --------------------------------------------------
console.log("\n1. basename()")
console.log("File Name:", path.basename(filePath))
console.log("File Name without extension:", path.basename(filePath, ".js"))


// --------------------------------------------------
// dirname()
// --------------------------------------------------
console.log("\n2. dirname()")
console.log("Directory:", path.dirname(filePath))


// --------------------------------------------------
// extname()
// --------------------------------------------------
console.log("\n3. extname()")
console.log("Extension:", path.extname(filePath))


// --------------------------------------------------
// parse()
// --------------------------------------------------
console.log("\n4. parse()")
console.log("Parsed Object:", path.parse(filePath))


// --------------------------------------------------
// format()
// --------------------------------------------------
console.log("\n5. format()")

const pathObj = {
  dir: "D:/nodejs/html/js",
  base: "app.js"
}

console.log("Formatted Path:", path.format(pathObj))


// --------------------------------------------------
// join()
// --------------------------------------------------
console.log("\n6. join()")
const joinedPath = path.join("users", "nodejs", "app.js")
console.log("Joined Path:", joinedPath)


// --------------------------------------------------
// normalize()
// --------------------------------------------------
console.log("\n7. normalize()")

const messyPath = "/users/nodejs/../app.js"
console.log("Before:", messyPath)
console.log("After:", path.normalize(messyPath))


// --------------------------------------------------
// isAbsolute()
// --------------------------------------------------
console.log("\n8. isAbsolute()")

console.log("Is Absolute (/users/app.js):", path.isAbsolute("/users/app.js"))
console.log("Is Absolute (app.js):", path.isAbsolute("app.js"))


// --------------------------------------------------
// relative()
// --------------------------------------------------
console.log("\n9. relative()")

const relativePath = path.relative("/data/test", "/data/app")
console.log("Relative Path:", relativePath)


// --------------------------------------------------
// resolve()
// --------------------------------------------------
console.log("\n10. resolve()")

const absolutePath = path.resolve("folder", "app.js")
console.log("Resolved Absolute Path:", absolutePath)


// --------------------------------------------------
// __dirname and __filename
// --------------------------------------------------
console.log("\n11. __dirname and __filename")

console.log("Current Directory:", __dirname)
console.log("Current File:", __filename)


// --------------------------------------------------
// Demonstrating ./ and ../
// --------------------------------------------------
console.log("\n12. Understanding ./ and ../")

console.log("./ means current folder")
console.log("../ means parent folder")

const example1 = path.resolve("./app.js")
const example2 = path.resolve("../app.js")

console.log("Example ./ :", example1)
console.log("Example ../ :", example2)


console.log("\n============== END OF DEMO ==============")