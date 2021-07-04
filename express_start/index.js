const express = require('express')

const app = express()
app.use(express.json())  //json =>req.body
//database
//memory
//user 

//login
//register
//user info update
//user delete

app.use(function (req, res, next) {
    console.log("Hello I'm pale dai")
    next('No identity card')
    // /without any argument =>go to next step"

    //next('sdfasdfa')
    //error handling middleware
})

const users = [{ id: 1, name: 'hari' }, { id: 2, name: 'ram' }]

//v4
app.post('/users/register', (req, res) => {
    const name = req.body.name
    const id = users.length + 1

    const user = { id, name }
    users.push(user)

    res.send(user)

})
// middleware based framework

app.use(function (err, req, res, next) {
    console.log("I'm error handling middleware", err)
    res.status(500).send("internal server error")
})

const port = 4000
app.listen(port, (err) => {
    if (err) console.log("Error ", err)
    else console.log(`Server is listening on http://localhost:${port}`)
})
