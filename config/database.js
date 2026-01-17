const mongoose = require("mongoose");
require("dotenv").config();

const connectwithDb =() =>{
    mongoose.connect(process.env.DATABASE_URL)
     .then(()=>console.log("Successfull"))
    .catch((error)=>{
        console.log("failed")
        console.error(error.message);
        process.exit(1);
});
}
module.exports= connectwithDb; 