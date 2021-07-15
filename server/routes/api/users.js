const express = require('express');
const router = express.Router();
const currentUsers = require('../../model/Users');


// Get all users
router.get('/', (req, res, next) => res.json(currentUsers));

// Get Single user
router.get('/:id', (req, res) => {
    // Checks to see if there is a user with the specified id
    const matchedUser = currentUsers.some((user) => user.id === parseInt(req.params.id));
    
    if(matchedUser) {
        res.json(currentUsers.filter((user) => user.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({msg: `No user with the id of ${req.params.id}`});
    }  
});

// Add Single user
router.post('/', (req, res) => {
    const lastUID = currentUsers.length;
    const newUser = {
        id: lastUID + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        email: req.body.email
    };

    currentUsers.push(newUser); 
    console.log(req.headers);
    // Redirect must use actual route
    res.status(201).redirect(req.headers.origin)
    //.redirect('/api/users'); // res.json({ msg: 'new user added!', createdUser: newUser})
});

module.exports = router;