const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const puppySchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    breed: {

    },
    age: {
        
    }
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Puppy', puppySchema)