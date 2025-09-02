import express from 'express';
import  expressValidator  from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const { body, validationResult } = expressValidator;
const JWT_SECRET = 'portfolio';

router.post('/createUser', [body('username').isLength({ min: 2 }),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        let user = await User.findOne({username: req.body.username});

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        const salt = await bcrypt.genSalt(7)
        const secPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            username: req.body.username,
            password: secPassword
        })

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ success: true, user, authToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
})


router.post('/login', [body('username').isLength({ min: 2 }),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const { username, password } = req.body;
    try {
        const user = await User.findOne({username: username});
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        } 

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ success: true, user, authToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
})

export default router;