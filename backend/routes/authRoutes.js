
import  express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import mailer from "nodemailer";
import jwt_decode from "jwt-decode";
import asyncHandler from 'express-async-handler'
const handleErrors=(err)=>{
console.log(err.message,err.code);
let errors={name:'',email:'',person:'',password:''};
if (err.code===11000)
{
    errors.email="That email is already registered";
    return errors;
}
 
if(error.message=== "Incorrect email")
{
error.email="Incorrect email"
}

if(error.message=== "Incorrect password")
{
error.email="Incorrect password"
}
if(err.message.includes('user validation failed'))
{
   Object.values(err.errors).forEach(error=>{
      errors[error.properties.path]=error.properties.message;

   })
}

return errors;
}
const maxAge=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},'Eadgroup0120202021',{
        expiresIn:maxAge
    });
}

const router=express.Router();

router.post('/signup',async (req,res)=>{
const {name,email,person,password}=req.body;

try{
    const user=await User.create({name,email,person,password});
    const token=createToken(user._id);
    
   
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
          
            
            res.status(201).json({name:user.name});
            

}
    

catch(err)
{
   const errors= handleErrors(err);
   res.status(400).json({errors});
    
}
});

router.post('/forgetpassword',async(req,res)=>{
    
    const user=await User.findOne({email:req.body.email});
   
    console.log(user);
    if(user==null)
    {
        res.json("Please enter correct email id")
    }
    else
    {
        const token=createToken(user._id);
    
        var transport = mailer.createTransport({
            service : "Gmail",
            auth : {
                user : "soadgrp1@gmail.com",
                pass : "Soad@001"
            }, tls: {
               
                rejectUnauthorized: false
            }
        });
      
        console.log("http://localhost:3000/changepassword/" + token);
   
        var mailOptions = {
            from : "soadgrp1@gmail.com",
            to : user.email,
            subject : "change password of findR website",
            text : 'Visit this http://localhost:3000/changepassword/'+token,
            html : '<a href="http://localhost:3000/changepassword/'+token+'"><H2>Click on this link to change the password</H2></a>'
        }
       
        

        return  transport.sendMail(
            mailOptions,function(email_err,email_data){
                 if(email_err){
                    
                     res.json(email_err);
                 }else{
                    res.json("please change the password we have sent the link to you");
                     
         }
         })
    }

})
router.get('/changepassword/:token',function(req,res){
    var token = req.params.token;
    var data = jwt_decode(token);
console.log(data);
  

});

router.post('/changepassword/:token',async(req,res)=>{
    try{
        
        var token = req.params.token;
        var data = jwt_decode(token);
     var pas=req.body.password;
     const user= await User.findOne({_id:data.id});
     

     const salt=await bcrypt.genSalt();
     user.password=await bcrypt.hash(pas,salt);

    
           
            user.password=hash;
            user.save().then( res.redirect("/"));
           
    
        
    
    }catch(err)
    {
        res.json("Invalid token")
    }
   
});






router.post('/login',async (req,res)=>{
    const {name,password}=req.body;
    console.log(name);
    try{

    const user = await User.login(name,password);
    console.log(user);
   
    const token=createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});

    res.status(200).json({id:user._id,token:token,name:name});

    
    
}
    catch(err)
    {
        const errors=handleErrors(err);
res.status(400).json({errors});
    }
    })


router.get('/:id',asyncHandler(async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(user)
    {
    res.json(user);
    }
    else{
        res.send("No such user");
    }
}))

export default router