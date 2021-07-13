import express from 'express';
import authRoutes from './auth.routes.js';
import postRoutes from './post.routes.js';
import userRoutes from './user.routes.js';
const router = express.Router();

router.use('/', authRoutes);
router.use('/', postRoutes);
router.use('/', userRoutes);

export default router;