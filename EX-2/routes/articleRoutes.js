import express from 'express';
import { getArticles, getArticleId, createArticle, updateArticle, deleteArticle } from '../controllers/article.js';

const router = express.Router();
router.get('/', getArticles); // GET /articles - List all articles
router.get('/:id', getArticleId);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;