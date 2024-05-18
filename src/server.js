import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.VITE_CONNECTION_URL
    , {useNewUrlParser: true, useUnifiedTopology: true}
)

app.use(cors());

app.get('/api/data', (req, res) => {
    // Handling GET request
});

app.post('/api/data', (req, res) => {
    // Handling POST request
});

app.listen(5173, () => console.log('Server started on port 5173'));