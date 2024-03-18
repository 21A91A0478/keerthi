const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./src/routes/userRoutes');
const patient = require('./models/patient');
// const patient = req
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use('/',UserRouter);
//mongodb+srv://Bhavyasri:uDRFYN8pyqktvoBa@cluster0.gwlwjqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb+srv://Bhavyasri:uDRFYN8pyqktvoBa@test.gwlwjqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000))
.then(() =>
    console.log("Connected to Database & Listining to localhost 5000")
    )
.catch((err) => console.log(err));  


app.post('/patient',(req,res,next)=>{
    console.log(req.body)
    const{patientName,patientID,age,email,gender,mobile,disease,address,bed,department,date,bloodGroup,DOB,password,nurseID,docId,details}=req.body.AddPatient;
    const patientform1 = new patient({
        patientName,
        patientID,
        age,
        email,
        gender,
        mobile,
        disease,
        address,
        bed,
        department,
        date,
        bloodGroup,
        DOB,
        password,
        nurseID,
        docId,
        details,
    })
    try{
        patientform1.save();
        return res.status(200).json({msg:"inserted"})

    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"not inserted",result:patientform1})
    }
  })
  
