const express=require("express");

const cors=require("cors")

const dataServices=require('./Services/dataServices')


const app = express()
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on the port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

app.post('/register',(req,res)=>{
    dataServices.register(req.body.username,req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)

        }
    )
})

app.post('/login',(req,res)=>{
    dataServices.login(req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result) })

        }
    )

app.get('/all-students',(req,res)=>{
    dataServices.getStudents().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
app.post('/addStudent',(req,res)=>{
    dataServices.addStudent(req.body.id,req.body.name,req.body.classname,req.body.dob,req.body.email,req.body.mobile,req.body.city).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.patch('/updateStudent',(req,res)=>{
    dataServices.updateStudent(req.body._id,req.body.id,req.body.name,req.body.classname,req.body.dob,req.body.email,req.body.mobile,req.body.city).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.delete('/deleteStudent/:id',(req,res)=>{
    dataServices.deleteStudent(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


app.post('/viewstudent',(req,res)=>{
    dataServices.viewStudent(req.body.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})