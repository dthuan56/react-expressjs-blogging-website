import express from 'express';
import authRoutes from './auth.routes.js';
import blogRoutes from './blog.routes.js';
const router = express.Router();

router.use('/', authRoutes);
router.use('/', blogRoutes);

export default router;