import express from 'express'
import Roommate from '../models/roommatesModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()


// Fetch all roommates
router.get('/', asyncHandler(async (req,res) => {
    const roommates = await Roommate.find({})
    res.json(roommates)
}))

router.post('/roomiereg',asyncHandler(async (req,res) => {
    const {user,name,gender,hometown,roomtown,language,occupation,course,alcohol,smoking,food_preference,culinary} = req.body
    try{
        const roommate = await Roommate.create({ user, name, gender, hometown, roomtown, language, occupation, course, alcohol, smoking, food_preference, culinary})
        console.log(roommate)
        res.status(201).json({roommate:roommate.name})
    }
    catch(err){
        res.status(400).json({err});
    }
}))
//fetches rommate by id
router.get('/:id', asyncHandler(async (req,res) => {
    const roommate = await Roommate.findById(req.params.id)
    if(roommate){
        res.json(roommate)
    } else {
        res.status(404)
        throw new Error('oops!!! no such roommate found')
    }
    
    
}))

export default router