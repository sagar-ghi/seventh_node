//user create
//user update
//user delete
//user read

import express from 'express'
import User from './model.js'
import { userSchema } from './validation.js'

const router = express.Router()


//first kura
//FE
//Double check

//200-299 => All ok
//400-499 =>invalid 
//500 =>server produce vako error

router.post('/create', async (req, res) => {
    const data = req.body

    const { error } = userSchema.validate(data)
    if (error) return res.status(400).send(error.details[0].message)

    const isDuplicate = await User.findOne({ email: req.body.email })
    if (isDuplicate) return res.status(400).send("Email already taken by another user")

    const user = new User(data)
    await user.save()

    res.send(user)
})

router.get('/me', async (req, res) => {
    const user = await User.findOne()
    res.send(user)
})

router.put('/update/:id', async (req, res) => {
    const id = req.params.id
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
    res.send(updatedUser)
})

router.delete('/delete/:id', async (req, res) => {
    const result = await User.remove({ _id: req.params.id })
    res.send(result)
})

export default router;