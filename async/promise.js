//create

const ride = new Promise((resolve, reject) => {
    let requestAccepted = false

    if (requestAccepted) {
        resolve("My promise fulfilled")
    } else {
        reject('He rejected the promise')
    }
})




//consume
ride
    .then((data) => console.log(data))
    .then()
    .then()
    .then()
    .catch(err => console.log('Error', err))
    // .finally(() => )