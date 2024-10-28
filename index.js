import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
// // import postRoutes from './routes/posts.js';
// // import commentRoutes from './routes/comments.js';
// // import error from './errors/error.js';

dotenv.config();

const app = express();
app.use(express.json());


//more error stuff
// app.use((err, req, res, next) => {
//     console.log('Request from URL: ' +req.url);
//     res.status(500).send('Error');
//     next();
// });

//root endpoint
app.get('/', (req, res) => {
    res.send('welcome.');
});

app.use('/users', userRoutes);

// //get route
// // app.get('/users', (req, res) => {
// //     res.json('users.');
// // });

// // app.get('/users/:id', (req, res) => {
// //     const user = users.find(user => user.id === parseInt(req.params.id));
// //     if (!user) return res.status(404).json({ message: 'User not found.' }); 
// //     res.json(user);
// // });

// // //GET  post
// // app.get('/posts', (req, res) => {
// //     res.send('post');
// // });

// // app.get('/comments', (req, res) => {
// //     res.send('At Default Endpoint.');
// // });

//404 -handling middleware
app.use((req, res) => {
    res.status(404).send('Not Found');
    res.json({err: 'Not Found'});
});

//err -handling middleware
app.use((err, req, res, next) => {
    res.status(err.send || 500)
    res.json({message: err.message})
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})







