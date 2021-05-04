import mongoose from 'mongoose'

const roommateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hometown: {
        type: String,
        required: true
    },
    roomtown: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    alcohol: {
        type: String,
        required: true
    },
    smoking: {
        type: String,
        required: true
    },
    food_preference: {
        type: String,
        required: true
    },
    culinary: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Roommate = mongoose.model('Roommate', roommateSchema)

export default Roommate