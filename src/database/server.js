import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from "dotenv"
import {Event, Blog} from "../database/schemas.js"

// Set up configs
dotenv.config();
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to database
mongoose.connect(process.env.VITE_CONNECTION_URL)

// Middleware for event
app.get('/api/event', (req, res) => {
    Event.find()
      .then(events => res.json(events))
      .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/api/event', (req, res) => {
    const newEvent = new Event(req.body);
    console.log("Working POST! for event");
    newEvent.save()
      .then(() => res.json("Event added"))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Middleware for blog
app.get('/api/blog', (req, res) => {
    Blog.find()
      .then(blogs => res.json(blogs))
      .catch(err => res.status(400).json('Error : ' + err));
});

app.post('/api/blog', (req, res) => {
    const newBlog = new Blog(req.body);
    console.log("Working POST! for event");
    newBlog.save()
      .then(() => res.json("Blog added"))
      .catch(err => res.status(400).jsom('Error: ' + err))
});

// Middleware
app.listen(5174, () => console.log('Server started on port 5174'));