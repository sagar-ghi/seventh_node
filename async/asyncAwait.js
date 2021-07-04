// //2017
// // async await

// async function add(){
//     await //reading data from database
// }
import { SlowBuffer } from 'buffer'
import fetch from 'node-fetch'


const useData = async (url) => {
    try {
        const result = await fetch(url)
        const data = await result.json()
        return [data, null]
    } catch (ex) {
        return [null, ex]
    }

}


const [data, error] = await useData('https://jsonplaceholder.typicode.com/todos/1')
const [data2, error1] = await useData('https://jsonplaceholder.typicode.com/todos/1')

if (error) console.log("I'm error one")
if (error1) console.log("I'm error 2")

console.log("result1", data)
console.log("result2", data2)


console.log("hey")

// return
//top level 
function getUserOne() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json)
}

function getUserTwo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(json => json)
}


async function getUserById() {
    // return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //     .then(response => response.json())
    //     .then(json => json)
    console.time('fakeUser')
    // const result1 = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    // const data1 = await result1.json()

    // const result2 = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    // const data2 = await result2.json()

    const [userOne, userTwo] = await Promise.all([getUserOne(), getUserTwo()])

    // console.log(userOne, userTwo)

    console.timeEnd('fakeUser')

}
getUserById()


//requirement
//array of data
const userId = [1, 2, 3, 4, 5]

// const arrFun=async ()=>{
//     await
// }

// userId.map(async user => {
//     await fetch(`https://jsonplaceholder.typicode.com/todos/${user}`)
// })

// async function getUserDetail() {
//     for await (let id of userId) {

//     }
// }



