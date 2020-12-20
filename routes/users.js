import express from 'express' ;
import { v4 as uuidv4 } from 'uuid'
import { createUser, deleteUserById, getUserById, getUsers, updateUserInfoById } from '../controllers/users.js';

const router = express.Router();




router.get('/', getUsers);

router.post('/', createUser)

router.get('/:id', getUserById)

router.delete('/:id', deleteUserById) 

router.patch('/:id', updateUserInfoById)

export default router