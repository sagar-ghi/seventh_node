const { readFile, readFileSync } = require('fs').promises
// console.log(fs)
//blocking code 


// const result = readFileSync('./test.txt', 'utf8')
// console.log(result)

// async
async function readData() {
    const result = await readFile('./test.txt', 'utf8')
    console.log(result)
}
readData()
// readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) console.log('Error occurred:', err)

//     else console.log("DATA:", data)
// })
console.log("hello")