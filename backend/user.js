const mongoose = require('mongoose');

// Define the schema for storing player name and score
const userSchema = new mongoose.Schema({
    
    email: { 
        type: String,
        required: true 
    },
    score: { 
        type: Number, 
        required: true
    }
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model so it can be used in other files
module.exports = User;  // Fix the typo here

