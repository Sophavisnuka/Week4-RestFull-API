import express from 'express';
import { getJournalist, getJournalistId, createJournalist, updateJournalist, deleteJournalist } from '../controllers/journalist.js';

const router = express.Router();
router.get('/', getJournalist); // GET /Journalist - List all Journalist
router.get('/:id', getJournalistId);
router.post('/', createJournalist);
router.put('/:id', updateJournalist);
router.delete('/:id', deleteJournalist);

export default router;