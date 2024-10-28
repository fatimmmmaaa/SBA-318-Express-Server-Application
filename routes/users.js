import express from 'express';
import { users } from '../data/users.js';

const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
});

export default router;

