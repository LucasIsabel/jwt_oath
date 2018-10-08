import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes'

const app = express(),
    port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/v1', routes);

// Start the server
app.listen(port, () => console.log(`app is running at port ${port}`));