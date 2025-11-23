import express from 'express';
import "dotenv/config"

import { errorHandle } from './src/middleware/errorHandler.js';

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('hello')
})

app.use(errorHandle)

app.listen(port,'0.0.0.0',() => {
    console.log('running port')
})