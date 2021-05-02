import mongoose from 'mongoose'

const connectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    connectionusers: [
        {
            user : {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            message : {
                type: String,
                required: false,
                default: "Heyy!! I would like to be your new roommate."
            },
            status : {
                type: String,
                default: "Pending"
            }
        }
    ],
    requests: [
        {
            user : {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            message : {
                type: String,
                required: false,
                default: "Heyy!! I would like to be your new roommate."
            },
            status : {
                type: String,
                default: "Pending"
            }
        }
    ],

}, {
    timestamps: true
})

const connect = mongoose.model('Connections', connectSchema)

export default Connections