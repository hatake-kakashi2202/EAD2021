import express from 'express'
import Packers from '../models/packersModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()


router.get('/', asyncHandler(async (req,res) => {
    const movers = await Packers.find({})
    res.json(movers)
}))



router.post('/create',asyncHandler(async(req,res) => {
    var mover = new Packers({
    name:req.body.name,
    
phonenumber:req.body.phonenumber,
email_id:req.body.email_id,
from_address:req.body.from_address,
from_city:req.body.from_city,
from_state:req.body.from_state,
from_zipcode:req.body.from_zipcode,
Num_of_workers_required:req.body.Num_of_workers_required,
Num_of_trucks_required:req.body.Num_of_trucks_required,
to_address:req.body.to_address,
to_city:req.body.to_city,
to_state:req.body.to_state,
to_zipcode:req.body.to_zipcode,
date_of_moving:req.body.date_of_moving



        
        
        
        
      
       
        

        
        

    })
    mover.save().then(mover => {
        console.log(mover);
        res.send(mover);
    }, (e) => {
        res.status(400).send(e);
    })
}))


export default router;