import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import cors from 'cors';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use('/articles', articleRoutes);
app.use('/category', categoryRoutes);
app.use('/journalist', journalistRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
}); 