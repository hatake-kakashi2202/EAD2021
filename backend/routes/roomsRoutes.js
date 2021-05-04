import express from 'express'
import Rooms from '../models/roomsModel.js'
import User from '../models/User.js';
import asyncHandler from 'express-async-handler'
const router = express.Router()
import mongoose from 'mongoose';
import path from 'path';
import fileUpload from 'express-fileupload';
// Fetch all houses
import fs from 'fs';
router.get('/', asyncHandler(async (req,res) => {
    const rooms = await Rooms.find({})
    res.json(rooms)
}))
mongoose.set('useFindAndModify', false);
router.use(fileUpload());
router.use(express.static('images'));
//Fetch all houses posted by a owner
router.get('/myhouses/', asyncHandler(async (req,res) => {
    console.log(req.body.postedBy);
    await Rooms.find({postedBy: req.postedBy},(err,rooms)=>{
        if(err){
            throw err;
        }
        res.json({rooms})
    })
}))

// creating the house
router.post('/create',asyncHandler(async(req,res) => {
    let photo_1,photo_2,photo_3;
    let uploadPath1,uploadPath2,uploadPath3;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    photo_1 = req.files.photo_1;
    photo_2 = req.files.photo_2;
    photo_3 = req.files.photo_3;
    uploadPath1 = '/findR/images/' + photo_1.name;
    uploadPath2 =  '/findR/images/' + photo_2.name;
    uploadPath3 =  '/findR/images/' + photo_3.name;
    console.log(uploadPath1)
   await photo_1.mv(uploadPath1, function(err) {
        if (err)
          return res.status(500).send(err);
    
        
      });
     await photo_2.mv(uploadPath2, function(err) {
        if (err)
          return res.status(500).send(err);
    
        
      });
     await photo_3.mv(uploadPath3, function(err) {
        if (err)
          return res.status(500).send(err);
    
        
      });
console.log("hello")
  console.log(req.body.postedBy);

    var house = new Rooms({
    name:req.body.name,
    propertyfor:req.body.propertyfor,
        housetype: req.body.housetype,
        accomdationtype: req.body.accomdationtype,
        title: req.body.title,
        housenumber:req.body.housenumber,
        description: req.body.description,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode:req.body.zipcode,
        numberoffloors:req.body.numberoffloors,
        propertyfloor:req.body.propertyfloor,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        minprice: req.body.minprice,
        sqft: req.body.sqft,
        pets:req.body.pets,
        photo_1:photo_1.name,
        photo_2:photo_2.name,
        photo_3:photo_3.name



        
        
        
        
       // maxprice: req.body.maxprice,
       
        

        
        

    })
    house.save().then(house => {
        console.log(house);
        res.send(house);
    }, (e) => {
        res.status(400).send(e);
    })
}))

router.put('/put/:id',asyncHandler(async(req,res)=>{
    console.log(req.body)
    console.log("hi")
   await Rooms.findOneAndUpdate({name:req.params.id},req.body).then(room=>{
       res.send(room);
   })
    
}))

router.delete('/delete/:id',asyncHandler(async(req,res)=>{
    console.log(req.body)
    console.log("hi")
   await Rooms.findOneAndRemove({name:req.params.id},req.body).then(room=>{
       res.send("deleted succesfully");
   })
    
}))


router.get('/:id', asyncHandler(async (req,res) => {
   
    console.log(req.params.id);
    const room = await Rooms.findOne({name:req.params.id});
    console.log(room);
    if(room){
        res.json(room)
    } else {
        res.status(404)
        throw new Error('No room found')
    }    
}))


router.post('/search',asyncHandler(async(req,res)=>{
    var bedrooms=req.body.bedrooms;
    
    var minprice=req.body.minprice;
   var sqft=req.body.sqft;
    var city=req.body.city;
    var housetype=req.body.housetype;
    var propertyfor=req.body.propertyfor;
    var accomdationtype=req.body.accomdationtype;

    if(bedrooms==null)
    {
        bedrooms=0
    }
    if(minprice==null)
    {
        minprice=0
    }
   
    
    if(propertyfor==null)
    {
        propertyfor="Rent"
    }
    if(housetype==null)
    {
        housetype="Apartment"
    }
    if(accomdationtype==null)
    {
        accomdationtype="Family"
    }
   if(city==null)
   {
       city="guntur"
   }
   if(sqft==null)
   {
       sqft=0
   }
   const room= await Rooms.find({$and:[
       {bedrooms:{$gte:bedrooms}},
    {minprice:{$gte:minprice}},
    {sqft:{$gte:sqft}},
    {propertyfor:propertyfor},
    {housetype:housetype},
    {accomdationtype:accomdationtype},
    {city:city}

    



]}
       
    )
    res.send(room);
}))


export default router