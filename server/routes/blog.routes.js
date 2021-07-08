import express from 'express';
import { get } from '../controllers/blog.controller.js';


var router = express.Router();

router.get('/blogs', get);

export default router;


