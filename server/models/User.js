import mongoose from "mongoose";
import validator from 'validator';
const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        require: true,
        minlength: [2, 'Name should be more than 2 character'],
        maxlength: [24, 'Name should be less than 60 character'],
    },
    email: {
        type: String,
        required: true,
        min: [6, 'email should have more than 6 character'],
        max: [50, 'email should have less than 50 character '],
        unique: [true, 'This email is used before'],
        validate: [validator.isEmail, 'invalid email']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'password less than 8'],
        maxlength: [60, 'password more than 60'],
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: [8, 'number should have just 8 number'],
        maxlength: [8, 'password more than 8'],
        length:[8,'number should have just 8 number'],
        unique: [true, 'This PhoneNumber is used before'],
    }
}, { Timestamp: true });


const User = mongoose.model('User', UserSchema);
export default User;