const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../models/userSchema');
router.get('/', (req, res) => {
  res.send('hello this auth page of router');
});

router.post('/register', (req, res) => {
  console.log(req.body);

  // destructuring
  const { name, email, phone, work, password, cpassword } = req.body;

  // checking if any field is null
  if (!name || !email || !phone || !work || !password || !cpassword) {
    res.status(422).json({ error: 'plz filled the field properly' });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        res.status(422).json({ error: 'Email already exists' });
      }
      //we can make a document inside User collection   
      // creating a new user
      const user = new User({ name, email, phone, work, password, cpassword });

      // saving the user(document)
      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'user registered succesfully' });
        })
        .catch((err) => res.status(500).json({ error: 'failed to register' }));
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
