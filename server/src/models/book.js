const mongoose = require('mongoose')
const validator = require('validator')


const Book = mongoose.model('Book', {
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
   author: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!/^[a-zA-Z]+$/.test(value)) {
              throw new Error("Name must be string");
            }
          }
    },
    category: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!/^[a-zA-Z]+$/.test(value)) {
              throw new Error("Name must be string");
            }
          }
    },
    price:{
        type:Number,
        required:true
    }
    
})
module.exports=Book