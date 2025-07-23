import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        mongoose.connection.on('connected',()=>{
            console.log('Connected to MongoDB');
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`)

    } catch (error) {
        console.error('error in connecting to db', error);
    }
}
export default connectDB