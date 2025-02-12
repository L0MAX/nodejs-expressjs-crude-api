import { v4 as uuidv4 } from 'uuid';

// all the routes here are starting withb /users
let users = [];

export const getUsers = (req, res) => {
    // GET http://localhost:5000/users
    console.log(users);
    res.send(users);
}
export const createUser = (req, res) => { 
    // POST http://localhost:5000/users
    const user = req.body;

   const userWithId = { ...user, id: uuidv4() };

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    // GET http://localhost:5000/users/2
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    // DELETE http://localhost:5000/users/2
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    // PATCH http://localhost:5000/users/2
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
}


