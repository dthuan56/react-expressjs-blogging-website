import express from 'express';
import authRoutes from './auth.routes.js';
import blogRoutes from './blog.routes.js';
import userRoutes from './user.routes.js';
const router = express.Router();

router.use('/', authRoutes);
router.use('/', blogRoutes);
router.use('/', userRoutes);

export default router;