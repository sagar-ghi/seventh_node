//mongoose 

import mongoose from 'mongoose';

//!Type
//String
//Number
//Boolean
//Array

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, required: true, unique: true },
    phone: Number,
})
//model model

//class 
const User = mongoose.model('User', userSchema)

export default User