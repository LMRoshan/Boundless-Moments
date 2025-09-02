import mongoose from 'mongoose';
const MongoURL = 'mongodb://127.0.0.1:27017/portfolio'

const connectDB = () => {
    mongoose.connect(MongoURL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}

export default connectDB;
