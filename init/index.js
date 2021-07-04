import express from 'express'

const app = express()

app.use(express.json())//json=>req.body



const port = 5000
app.listen(port, (err) => {
    if (err) console.log("error connecting to the server....",err)
    else console.log("Go ahead I'm listening ")
})