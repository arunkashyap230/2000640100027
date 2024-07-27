const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { MONGO_URI } = require('./config/config');

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use('/api/users', userRoutes); // Use user routes

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
