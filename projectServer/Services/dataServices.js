const db=require('./db')


const register=(username,email,password)=>{

    return db.User.findOne({email}).then(//async call 
      user=>{
        if(user){
          return{
            status:false,
            statusCode:401,
            message:"user already exists"
          } 
        }
        else{
          const newuser= new db.User({
            username:username,
            email:email,
            password:password,

          })
          newuser.save()//to save new data to mongodb
          return{
            status:true,
            statusCode:200,
                message:"register successful"
          }
        }
      }
    )
}




const  login=(email,password)=>{
    return db.User.findOne({email,password}).then(//async call
    user=>{
      if(user){
       return {
         status:true,
        statusCode:200,
         message:"login success",
         email:user.email
       } 
     }
     else{
      return {
        status:false,
        statusCode:401,
        message:"invalid password"
      } 
    }
      }
    ) 
  
    }

const getStudents=()=>{

    return db.Student.find().then(
        (result)=>{
            if(result){
                return{
                     status:true,
                statusCode:200,
                students:result
                }
               
        }
        else{
            return{
                status:false,
           statusCode:401,
           message:'student not found'
           }

        }
    }
    )
}

const addStudent=(id,name,classname,dob,email,mobile,city)=>{
    return db.Student.findOne({id}).then(
        student=>{
            if(student){
                return{
                    status:false,
          statusCode:401,
          message:"Student already exists"
                }
            }
            else{
                const newstudent= new db.Student({
                    id:id,
                  name:name,
                  classname:classname,
                  dob:dob,
                  email:email,
                  mobile:mobile,
                  city:city   
                })
                newstudent.save()//to save new data to mongodb
                return{
                  status:true,
                  statusCode:200,
                      message:"Student Added successful"
                }
              }
        }
    )
}

const updateStudent=(_id,id,name,classname,dob,email,mobile,city)=>{
    return db.Student.findOneAndUpdate({_id:_id},{$set:{id:id,name:name,classname:classname,dob:dob,email:email,moblie:mobile,city:city}}).then(
        student=>{
            if(student){
            //   if(student.id==id && student.name==name && student.classname==classname && student.dob==dob && student.email==email && student.moblie==mobile && student.city==city)
            //   return{
            //     status:false,
            //     statusCode:401,
            //     message:"No change"
            // }
             return{ 
              status:true,
                  statusCode:200,
                      message:"update successful" 
            }
            }
            else{    
            return{
                status:false,
                statusCode:401,
                message:"error"
            }
              }
        }
    )
}

const viewStudent=(id)=>{

  return db.Student.findOne({id}).then(//async call 
    user=>{
      if(user){
        return{
          status:true,
          statusCode:200,
          student:user
        } 
      }else{
        return{
          status:false,
          statusCode:401,
          message:'view failed'
        }
      }
    }
  )
}

const deleteStudent=(id)=>{
    return db.Student.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Student Removed Successfully"
                }
            }
            else{
                return{
                    status:false,
                    statuscode:401,
                    message:'Student Not Found'
                }
            }

        }
    )
}


module.exports={
    getStudents,
    addStudent,
    deleteStudent,
    updateStudent,
    login,
    register,
    viewStudent
}