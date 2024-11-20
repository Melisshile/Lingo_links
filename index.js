// import
const express = require('express');

const path = require('path');

require('dotenv').config();

//fetching our authRoutes
const authRoutes = require('./routes/auth')

// initialize express app
const app = express();

//set up middleware

app.use(express.static(path.join(__dirname, '/')));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/auth', authRoutes); 

//set up our landing page
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'land.html'));
});

//set up our sign up page
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'signup.html'));
});

//set up our log in page
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'login.html'));
});

//start our server
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});