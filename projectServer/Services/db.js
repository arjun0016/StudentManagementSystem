const mongoose = require('mongoose')




mongoose.connect('mongodb://localhost:27017/StudentManagementSystem',()=>{
  console.log('connected to mongodb');
})

const Student=mongoose.model('Student',{//model  creation -Student
  // schema creation
  id:Number,
  name:String,
  classname:String,
  dob:String,
  email:String,
  city:String,
  mobile:Number
})
const User=mongoose.model('User',{//model  creation -user
  // schema creation

  email:String,
  password:String,
  username:String,
  password:String,


})

module.exports={
  Student,
  User
}