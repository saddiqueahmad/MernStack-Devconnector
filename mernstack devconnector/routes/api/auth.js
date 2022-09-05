const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

//@route   GET api/auth
//@desc    Test route
//@access  Public 

router.get('/', auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
});
//@route   POST api/auth
//@desc    Authenticate user & get token
//@access  Public 

router.post('/',
[
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'Password is required'
    )
    .exists()
], 

async (req,res) => {

const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
} 


 const { email, password } = req.body;

 try {

    let userData = await User.findOne({ email });
      if(!userData) {

         return res
         .status(400)
         .json({ errors: [{ msg: 'Invalid Credentials' }]});

      }

  const isMatch = await bcrypt.compare(password, userData.password);

  if(!isMatch) {
     
    return res
    .status(400)
    .json({errors: [{msg: 'Invalid Credentials'}]});


  }



 const payLoad = {
    user : {
       id: userData.id
     }
 }

 jwt.sign(
    payLoad,
    config.get('jwtSecret'),
    { expiresIn: '5 days' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );

 } 
 catch(err){

    console.error(err.message);
     res.status(500).send('server error');

 }
}


)


module.exports = router ;