const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB successfully");
    } catch (err) {
        console.error("MongoDB connection:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// tabukeezekiel9
// 6gr2R6yPvE3tVT06
// mongodb+srv://tabukeezekiel9:6gr2R6yPvE3tVT06@cluster0.5t5gm.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0

// FROM MODELS TO CONTROLLER TO ROUTER TO APP.JS.