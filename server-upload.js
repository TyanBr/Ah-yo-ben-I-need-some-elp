const express = require('express');
const  multer = require('multer');
const uuid = require('uuid').v4;

const app = express();
app.use(express.static('public'));

app.post ('/upload', (req, res) => {
    return res.json({status: 'ok'});
});

app.listen(5500, () => console.log('App is listening...'));