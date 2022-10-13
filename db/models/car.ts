import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    priceMin: {
        type: Number,
        required: true,
        default: 0,
    },
    priceMax: {
        type: Number,
        required: true,
        default: 0,
    },
    mileage: {
        type: Number,
        required: true,
        default: 0,
    },
    itemNumber: {
        type: String,
        required: true,
        trim: true
    },
    vin: {
        type: String,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        required: true,
        default: 0,
    },
    saves: {
        type: Number,
        required: true,
        default: 0,
    },
    shares: {
        type: Number,
        required: true,
        default: 0,
    },
    extrior:{
        cylinders: {
            type: String,
            required: true,
            default: '',
        },
        cityMpg: {
            type: Number,
            required: true,
            default: 0,
        },
        highMpg: {
            type: Number,
            required: true,
            default: 0,
        },
        engine: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    performance:{
        cylinders: {
            type: String,
            required: true,
            default: '',
        },
        cityMpg: {
            type: Number,
            required: true,
            default: 0,
        },
        highMpg: {
            type: Number,
            required: true,
            default: 0,
        },
        engine: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    imagesUrls:[{
        type: String,
        trim: true,
    }],
})

const CarSchema = mongoose.model('Car', carSchema)

export default CarSchema