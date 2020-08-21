const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOLAB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB-Atlas');
});