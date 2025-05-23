import express from 'express';
const logger = express();
// Logger middleware
logger.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}); 

export default logger;