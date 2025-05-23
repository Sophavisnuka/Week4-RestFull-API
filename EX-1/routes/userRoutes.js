import express from 'express';
import validateUser  from '../middleware/validateUser.js';
import {getUsers, getUserId, createUser, updateUser, deleteUser} from '../controllers/userController.js';

const router = express.Router();    

router.get('/', getUsers); // GET /users - List all users
router.get('/:id', getUserId); // GET /users/:id - Get one user
router.post('/', createUser, validateUser); // POST /users - Create new user
router.put('/:id', updateUser); // PUT /users/:id - Update user
router.delete('/:id', deleteUser); // DELETE /users/:id - Delete user

export default router;