import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('hello')
})

app.listen(port,'0.0.0.0',() => {
    console.log('running port')
})