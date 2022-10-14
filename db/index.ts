import mongoose from 'mongoose'

export const connectMongo = async () => {
    if(process.env.MONGO_URI){
        mongoose.connect(process.env.MONGO_URI )
    }
};

// export default connectMongo