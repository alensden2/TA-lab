const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any available port

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Initialize an empty object to store data
const data = {};

// Route to get all objects
app.get('/objects', (req, res) => {
  res.json(data);
});

// Route to add objects
app.post('/objects', (req, res) => {
  const { name, Id } = req.body;

  if (name && Id) {
    data[name] = Id;
    res.status(201).json({ message: 'Object added successfully' });
  } else {
    res.status(400).json({ message: 'Invalid data provided' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
