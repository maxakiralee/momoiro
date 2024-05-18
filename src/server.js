import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from "dotenv"

// Set up configs
dotenv.config();
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to database
mongoose.connect(process.env.VITE_CONNECTION_URL)


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

const BlogSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    post: {type: String, required: true}
})

const Blog = mongoose.model('Blog', BlogSchema);

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

// If you want to use this in a .jsx file, do the following:

// EVENTS
// const event = {
//     eventName: 'My Event',
//     organizer: ""
//     hour: 12,
//     day: 1,
//     month: 1,
//     year: 2024,
//     location: 'Los Angeles',
//     description: 'This is a description of my event.',
//     websiteURL: 'https://myevent.com'
//   };
  
//   fetch('http://localhost:5174/api/event', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(event),
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => console.error('Error:', error));

// BLOGS
// const blog = {
//     name: "This man",
//     email: "123@exampleemail.com",
//     post: "This is an example post"
// };

// fetch('http://localhost:5174/api/blog', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(blog),
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((error) => console.error('Error: ', error));