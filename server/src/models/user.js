const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!/^[a-zA-Z]+$/.test(value)) {
              throw new Error("Name must be string");
            }
          }
    },
    age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a postive number')
                }
            }
        },
        location: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (!/^[a-zA-Z]+$/.test(value)) {
                  throw new Error("Location must be string");
                }
              }
        },
        isAdmin:{
            type:Boolean,
            required: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('Password cannot contain "password"')
                }
            }
        },
        createdAt:{
            type:Date,
            required: false,
            default: Date.now()
        }
       
})
module.exports=User