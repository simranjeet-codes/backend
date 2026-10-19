require('dotenv').config()
// Importing the Express library.   import express as "express"
const express = require('express');

// Initializing the app.
const app = express()

const port = process.env.PORT;

// Getting the path request and sending the response with text.
app.get('/', (req, res) => {
    res.send('Hi, your request has been received');
});
app.get('/login', (req, res) =>{
   res.send('<h1> please login at simran server </h1>')
})
// Listening on port 2000.
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
