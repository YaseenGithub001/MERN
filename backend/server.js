const express = require('express');
const app = express();
const PORT = 5000 //PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({ extended: true })); // to render form data from frontend

//connect backend with DB
mongoose.connect("mongodb+srv://halfduplex001:M8aGFTFZOV3W9nvD@cluster0.u92xgk6.mongodb.net/MES")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message

// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE


const PRODUCT = require("./Model/PRODUCT")

app.post('/addData',async (req, res) => {
    try {

        let item = req.body
        console.log(item)


        const saveData = await PRODUCT(item) //PRODUCT is a model. we cross check the form data with the model we created before saving it
        await saveData.save()  // through this code we save the incoming data from front end to db 
        res.send((saveData))


    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});