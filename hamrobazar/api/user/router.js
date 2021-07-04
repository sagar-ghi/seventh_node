
import express from 'express'
import argon from 'argon2'
import User from './model.js'
import { loginSchema, userSchema } from './validation.js'

const router = express.Router()


router.post('/register', async (req, res) => {
    const data = req.body

    const { error } = userSchema.validate(data)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send("Email already taken by another user")

    data.password = await argon.hash(req.body.password)

    user = new User(data)
    await user.save()

    res.send(user)
})

router.post('/login', async (req, res) => {
    const data = req.body

    const { error } = loginSchema.validate(data)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ email: data.email })
    if (!user) return res.status(400).send("Invalid email/password")

    const isValid = await argon.verify(user.password, data.password)
    if (!isValid) return res.status(400).send("Invalid email/password")

    res.send("You are successfully logged in")
})



router.get('/me', async (req, res) => {
    const user = await User.findOne()
    res.send(user)
})

router.get('/all', async (req, res) => {

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