
import { Router } from "express";
//import * as loginCtrl from '../controller/loginCtrl.controller'
const User = require('../models/Usuario.model');
const router = Router();

const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Contrasenia incorecta');

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

export async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
            console.log("Unauhtorized Request")
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
            console.log("Unauhtorized Request")
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
            console.log("Unauhtorized Request")
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		console.log("Unauhtorized Request")
		return res.status(401).send('Unauhtorized Request');
	}
}

export default router;


