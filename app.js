const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const PORT = 5000;


const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected!!'))
.catch((err) => console.error('MongoDB Connection Error!!'));

app.use('/api/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is Running : http://localhost:${PORT}`);
});