const express = require('express');
const router = express.Router();

router.get('/login', (req,res) => {
    res.render('login', { title: 'Login'});
})

router.get('/register', (req,res) => {
    res.render('register', { title: 'Register'});
})

router.post('/register', (req,res) => {
    const { name, email, password } = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password) {
        errors.push({msg: 'Please fill in all fields.'})
    }
    //check pass length
    if(password.length < 6) {
        errors.push({msg: 'Password should be at least 6 characters.'})
    }

    if(errors.length > 0) {
        res.render('register', { title: 'Register',
            errors,
            name,
            email,
            password
        })
    } else {
        res.send('pass')
    }
})

module.exports = router;