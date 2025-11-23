import express from 'express';
import "dotenv/config"

import { errorHandle } from './src/middleware/errorHandler.js';
import apiV1Routes from './src/routes/api.v1.js'

const app = express();
const port = 3000;

app.use('/api/v1', apiV1Routes)

app.use(errorHandle)

app.listen(port,'0.0.0.0',() => {
    console.log('running port')
})