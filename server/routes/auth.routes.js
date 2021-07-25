import express from 'express';
var router = express.Router();
import {login} from '../controllers/auth.controller.js';

router.post('/login', login);

export default router;