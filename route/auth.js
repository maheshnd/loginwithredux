const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const authMiddleware = require('../middleware/auth.middleware');
const User = require('../model/User');

//@route GET api/auth
//@desc  Get logged in user
//@access Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(5000).send('Server Error');
  }
});

//@route POST api/auth
//@desc  Auth user & get token
//@access Public
router.post(
  '/',
  [
    check('name', 'Please include a valid user').not().isEmpty(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, password } = req.body;

    try {
      let user = await User.findOne({ name });
      console.log(user);
      const test = user;

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credintials' });
      }

      if (user.password !== req.body.password) {
        return res.status(400).json({ msg: 'Invalid Credintials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(5000).send('Server Error');
    }
  }
);

module.exports = router;
