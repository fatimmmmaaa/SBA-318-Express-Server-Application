import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
    console.log('Request from URL: ' +req.url);
    res.status(500).send('Error');
    next();
});

app.get('/', (req, res) => {
    res.send('welcome.');
});

app.get('/users', (req, res) => {
    res.send('At Default Endpoint.');


});


app.get('/posts', (req, res) => {
    res.send('At Default Endpoint.');
});

app.get('/comments', (req, res) => {
    res.send('At Default Endpoint.');
});

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