// const getUser = (1) => {
//     setInterval(() => {

//         // console.log("I'm second")
//     }, 3000);
// }

console.log("Login process start ...")

getUser(2, (user) => {

    console.log("Data arrived", user)
    // getPhotos(user.photo,())
})


console.log("login process end...")

function getUser(userId, callback) {
    setTimeout(() => {
        console.log('Reading user from database ...')
        const user = { id: userId, name: "Hari", photo: 1 }
        callback(user)
    }, 2000);//2 sec
}

function getPhotos(photoId, callback) {
    setTimeout(() => {
        console.log('Reading user from database ...')
        const photos = [1,2,3,4,5,6]
        callback(photos)
    }, 2000);//2 sec
}

//callback
//promise
//async await