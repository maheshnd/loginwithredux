const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/auth', require('./route/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port :  ${PORT}`);
});
