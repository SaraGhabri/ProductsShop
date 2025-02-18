//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();



//call the function
const app = express ();

//create a route
app.post("/products", (req,res) =>{
  
} );


// specify the port and call the callback function once ready and on which  port
app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});