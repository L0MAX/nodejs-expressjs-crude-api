import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';


const router = express.Router();

// all the routes here are starting withb /users




//list all users
router.get('/', getUsers);

//create a user
router.post('/', createUser);

//get a specific user
router.get('/:id', getUser);

//delete a user
router.delete('/:id', deleteUser);

//update a user
router.patch('/:id', updateUser);

export default router;