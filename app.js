const express = require("express");
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 3030;
const productRoute = require('./src/module/route/product.route');
const mongoose = require("mongoose");


//db config
//uri
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})



const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

app.use('/product', productRoute)
app.get('/', (req,res)=>{
    res.json("Hello Express")
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})