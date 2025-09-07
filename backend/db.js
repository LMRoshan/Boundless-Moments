// import mongoose from 'mongoose';
// const MongoURL = 'mongodb://127.0.0.1:27017/portfolio'

// const connectDB = () => {
//     mongoose.connect(MongoURL)
//     .then(() => {
//         console.log("MongoDB connected");
//     })
//     .catch((err) => {
//         console.error("MongoDB connection error:", err);
//     });
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://roshan:yourrealpassword@acsend.tw7etwf.mongodb.net/boundlessmoments?retryWrites=true&w=majority&appName=acsend');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;
