import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Could not connect to database");
    }
};

export default connectDB;
