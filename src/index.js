import express from 'express';
import mongan from 'morgan';
import bodyParser from 'body-parser';

const app = express(),
    port = process.env.Port || 3000;
app.use(mongan('dev'))
app.use(bodyParser.json())

// Middlewares

// Routes

// Start the server

app.listen(port, () => console.log(`app is running at port ${port}`))