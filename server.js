const express = require("express");
const dotenv = require("dotenv").config();
 const port = process.env.PORT || 5000;

 const app = express();

 app.get('/api/tasks', (req, res)=>{
    res.status(200).json({message: 'Get all Task'})
 })

 app.listen(port, ()=>console.log(`Server is running on port ${port}`));
