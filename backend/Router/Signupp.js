const express = require('express');
const router = express.Router();
const Sign = require('../Model/Signup'); 
const jwt=require('jsonwebtoken')
const secretKey = 'sign';

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Sign.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    if (user.password === password) {
      

      // Send the token as a response
      res.status(200).json({ message: 'Login successful', token, data:user });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

router.post('/check-email', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Sign.findOne({ email });
    if (user) {
      res.json({ emailExists: true });
    } else {
      res.json({ emailExists: false });
    }
  } catch (error) {
    console.error('Email check error:', error);
    res.status(500).json({ message: 'Email check failed' });
  }
});



router.post('/register', async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    let userRole = 'user';

 
    if (email === 'admin@gmail.com') {
      userRole = 'admin';
    }

    const userExists = await Sign.findOne({ email });

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number (10 digits required)' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new Sign({ name, email, phoneNumber, password, userRole });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validatePhoneNumber(phoneNumber) {
  return /^\d{10}$/.test(phoneNumber);
}





module.exports = router;




  
