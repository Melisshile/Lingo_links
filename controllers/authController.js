//import
const db = require('../config/db');

const bcrypt = require('bcryptjs');

// config user registration function 
exports.registerUser = async (req, res)=>{
    // fetch data
    const {name, surname,username, email, password, nationality, gender, phoneNumber}= req.body;

    try{
        // if user exists
        //define the variable that hold that
        const [rows] = await db.execute('SELECT * FROM users WHERE email =?', [email]);
        if(rows.length > 0){//meaning the user has found so stop execution
            return res.status(400).json({message: 'User already exists!'});
        }
        //here user does not exist, then populate our db 
        //we start hashing the password
        const hashedPassword = await bcrypt.hash(password, 13);
        //and inserting the records
        await db.execute('INSERT INTO users(name, surname,username, email, password, nationality, gender, phoneNumber) VALUES(?,?,?,?,?,?,?,?)', [
            name, surname,username, email, hashedPassword, nationality, gender, phoneNumber
        ]);
        res.status(201).json({message: 'Successful User registration'});
    } catch(error){
        res.status(500).json({message: 'An error occured!!!', error});
    }
};

//config user log in
exports.loginUser = async (req, res)=>{
    //fetching data
    const {email, password} = req.body;
    try{
        // if user exists
        //define the variable that hold that
        const [rows] = await db.execute('SELECT * FROM users WHERE email =?', [email]);
        if(rows.length === 0){//meaning the user is not found so stop execution
            return res.status(400).json({message: 'User not found! Please, register.'});
        }
        //here user exist, then get the record from the rows
        const user = rows[0];
        
        //compare the password
        isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials!!!'});
        }
        res.status(200).json({message: 'Successfully logged in!', name: user.name, email: user.email});
    } catch(error){
        res.status(500).json({message: 'An error occured!!!', error});
    }

};