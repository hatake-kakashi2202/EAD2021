import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:[true,'Please enter the username'],
        lowercase:true
    },

    email:{
        type:String,
        required:[true,'Please enter the email id'],
        lowercase:true,
        validate:[validator.isEmail,'Please enter a valid email']
    },
  
    person:{
        type:Number,
        required:[true,'Please select the one of the option'],

    },
    password:{
        type:String,
        required:[true,'Please enter the password'],
        minlength:[6,'Minimum password  length is 6']
    },
})
/*
userSchema.post('save',function(doc,next){

    next();
})*/

userSchema.pre('save',async function(next){
const salt=await bcrypt.genSalt();
this.password=await bcrypt.hash(this.password,salt);
next();
})

userSchema.statics.login=async function(name,password)
{
    const user=await this.findOne({name:name});
    if (user)
    {
   const auth=await bcrypt.compare(password,user.password);  
   if(auth)
   {
       return user;
   }
   throw Error("Incorrect password");   
    }
    throw Error("Incorrect email");
}

const User = mongoose.model('user',userSchema);

export default User;