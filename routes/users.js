import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

// all the routes here are starting withb /users

let users = [
];

//list all users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

//create a user
router.post('/', (req, res) => { 
    // POST http://localhost:5000/users
    const user = req.body;

   const userWithId = { ...user, id: uuidv4() };

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database!`);
});

//get a specific user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

//delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
});

//update a user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
});

export default router;