import express from 'express';
import connectDB from './db/connect';  

const app = express();

connectDB();

app.use(express.json());  

app.listen(5000, () => console.log('Server running on port 5000'));
