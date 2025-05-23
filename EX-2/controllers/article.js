import { articles } from '../models/data.js';

export const getArticles = (req, res) => {
    res.json(articles);
}

export const getArticleId = (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(article => article.id === articleId);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
}

export const createArticle = (req, res) => {
    const { title, content, categoryId, journalistId } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        categoryId,
        journalistId
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
}

export const updateArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const { title, content, categoryId, journalistId } = req.body;
    const article = article.find(article => article.id === articleId);
    if (!article) {
        return res.status(404).json({message: 'Article not found'});
    }
    if (title) article.title = title;   
    if (content) article.content = content;
    if (categoryId) article.categoryId = categoryId;
    if (journalistId) article.journalistId = journalistId;
    res.json(article);
}

export const deleteArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const index = articles.findIndex(article => article.id === articleId);
    if (index === -1) {
        return res.status(404).json({ message: 'Article not found' });
    }
    articles.splice(index, 1);
    res.status(204).send();
}