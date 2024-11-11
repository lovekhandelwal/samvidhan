const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./user'); // Import the User model from user.js

// MongoDB connection string (replace with your actual URI)
const dbURI = 'mongodb+srv://lovekhandelwal1680:love8080@cluster11.d1myx.mongodb.net/samvidhan?retryWrites=true&w=majority&appName=Cluster11';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Express setup
const express = require('express');
const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON requests

const port = 3000;

// Test route
app.get('/', (req, res) => {
  res.send('Hello, Node.js with MongoDB!');
});

// API endpoint to store user name and score
app.post('/save-score', async (req, res) => {
  console.log('Request body:', req.body); // Log the incoming data
  const { email, score } = req.body;

  try {
      // Check if a user with the same name exists
      let user = await User.findOne({ name });
      if (user) {
          // If the user exists, update the score
          user.score = score;
          await user.save();
          console.log('User score updated:', user);
          res.status(200).send({ message: 'Score updated successfully' });
      } else {
          // If the user doesn't exist, create a new user
          user = new User({ name, score });
          await user.save(); // Save to MongoDB
          console.log('New user saved:', user); // Log success
          res.status(200).send({ message: 'New user saved successfully' });
      }
  } catch (error) {
      console.error('Error saving to MongoDB:', error); // Log the error
      res.status(500).send({ message: 'Failed to save score', error });
  }
});

  // Enable CORS for all routes
const cors = require('cors');
app.use(cors());




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
