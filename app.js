const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router');

const app = express();

app.use('/files', express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//render engine
app.set('view engine', 'ejs');

//tries to connect to a locally hosted mongodb database, the database path can easily be swapped out
//for a path to a different host (e.g atlas). The server will only start if the application was able to 
//successfully connect to the database.
const databasePath = 'mongodb://127.0.0.1:27017/scrapper';
mongoose.connect(databasePath)
    .then((result) => {
        app.listen(3500, () => {
            console.log('listening on port 3500');
        });
    }).catch((err) => console.log(err));

app.use(router);