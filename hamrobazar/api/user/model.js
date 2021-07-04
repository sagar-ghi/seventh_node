//mongoose 

import mongoose from 'mongoose';

//!Type
//String
//Number
//Boolean
//Array

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    address: String,
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'moderator']
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: String,
    phone: Number,
})
//model model

//class 
const User = mongoose.model('User', userSchema)

export default User