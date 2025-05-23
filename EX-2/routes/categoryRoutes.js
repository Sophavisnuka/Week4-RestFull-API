import express from 'express';
import { getCategory, getCategoryId, createCategory, updateCategory, deleteCategory } from '../controllers/category.js';

const router = express.Router();
router.get('/', getCategory); // GET /Category - List all Category
router.get('/:id', getCategoryId);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;