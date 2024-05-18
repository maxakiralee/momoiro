import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from "dotenv"

// Set up configs
dotenv.config();
const app = express();
app.use(express.json());

// Connect to database
mongoose.connect(process.env.VITE_CONNECTION_URL)

// Middleware
app.use(cors());

app.get('/api/data', (req, res) => {
    // Handling GET request
});

app.post('/api/data', (req, res) => {
    // Handling POST request
});

app.listen(5173, () => console.log('Server started on port 5173'));

// Schemas
const { Schema } = mongoose;

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

const Event = mongoose.model('Event', EventSchema);

// Below posts an Event

// const addEvent = new Event({
//     eventName: "Hello",
//     hour: 10,
//     day: 3,
//     month: 5,
//     year: 6,
//     location: "This place",
//     description: "A description",
//     websiteURL: "cornhub.corn"
// })

// addEvent.save();