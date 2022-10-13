const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    title: {
        type: String,
        required : [true, "Title is required"],
        minlength : 4,
        validate: {
            validator(value) {
                return !value.match(/^[a-z]/)
            },
            message: "First character has to be uppercase"
        }
    },
    description: {
        type: String,
    },
    datefrom: {
        type: Date,
    },
    dateto: {
        type: Date,
    },
    countryname : {
        type: String,
        validate: {
            validator(value) {
                return !value.match(/^[a-z]|[0-9]/g);
            },
            message: "Country must not include a number, and the first character has to be uppercase"
        },
    },
    location: {
        type: String,
        minlength: 4,
        required : [true, "Location is required"],
        validate: {
            validator(value) {
                return !value.match(/^[a-z]/)
            },
            message: "First character has to be uppercase"
        }
    },
    longtitude: {
        type: Number,
    },    
    latitude: {
        type: Number,
    },    
});

const Traveldestination = mongoose.model('traveldestination', travelSchema);

module.exports = Traveldestination;

