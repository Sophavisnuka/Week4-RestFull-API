import { categories } from '../models/data.js';

export const getCategory = (req, res) => {
    res.json(categories);
}

export const getCategoryId = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
}

export const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required'});
    }
    const newCategory = {
        id: categories.length + 1,
        name
    };
}

export const updateCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    const category = categories.find(categories => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    if (name) category.name = name;
    res.json(category);
}

export const deleteCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex(category => category.id === categoryId);
    if (index === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    categories.splice(index, 1);
    res.status(204).send();
};