// const add = require('./add')

// console.log(add())
// import math from './add.js'

// console.log(math.add())


//os
//fs
//http


// const os = require('os')

// console.log(os.platform())
// console.log(os.userInfo())

// event

// const { EventEmitter } = require('events')

// const event = new EventEmitter()

// event.on('userRegister', () => {
//     // logic
//     // sendMail()
//     console.log("Hello I'm listening ...")
// })

// event.emit('userRegister')



// 
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} sum of two numbers
 */
module.exports.add = function (num1, num2) { return num1 + num2 }


