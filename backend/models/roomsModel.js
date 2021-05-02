import mongoose from 'mongoose'

const roomsSchema = mongoose.Schema({
    postedBy:  [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    propertyfor:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    housetype: {
        type: String,
        required: true
    },
    accomdationtype: {
        type: String,
        required: true
    },
    
    title: {
        type: String,
        required: true
    },

    housenumber:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode:{
        type:Number,
        required:true
    },
    numberoffloors: {
        type: Number,
        required: true
    },
    propertyfloor: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    minprice: {
        type: Number,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    pets: {
        type:String,
        required: true
    },
   
    
    photo_1: {
        type:String,
        required: true
        
    },
    photo_2: {
        type:String,
        required: true
    },
    photo_3: {
        type:String,
        required: true
    },
}, {
    timestamps: true
})

const Rooms = mongoose.model('Rooms', roomsSchema)

export default Rooms