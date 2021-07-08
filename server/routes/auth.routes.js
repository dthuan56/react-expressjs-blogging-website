import express from 'express';
var router = express.Router();
import {login} from '../controllers/auth.controller.js';

router.post('/login', login);
// router.get('/login', (req, res) => {
//   res.send("asdasd");
// });

export default router;