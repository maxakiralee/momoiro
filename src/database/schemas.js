import mongoose from 'mongoose';
const { Schema } = mongoose;

// Events
const EventSchema = new Schema({
    eventName: {type: String, required: true},
    hour: {type: Number, required: true, enum: Array.from({length: 24}, (_, i) => i)},
    day: {type: Number, required: true, min: 1, max: 31, validate: {validator: Number.isInteger}},
    month: {type: Number, required: true, min: 1, max: 12, validate: {validator: Number.isInteger}},
    year: {type: Number, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    websiteURL: {type: String, required: false}
})

export const Event = mongoose.model('Event', EventSchema);

// Blogs
const BlogSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    title: {type: String, required: true},
    post: {type: String, required: true}
})

export const Blog = mongoose.model('Blog', BlogSchema);