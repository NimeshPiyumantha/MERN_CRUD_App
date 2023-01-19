const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

app.use(postRoutes);

const port = 8000;
const DB_URL = 'mongodb+srv://root:1234@mernapp.bgfziqs.mongodb.net/mernCrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {}).then(() => {
        console.log('DB Conncted');
    })
    .catch((err) => console.log('DB connection error.', err))

app.listen(port, () => {
    console.log(`App is running o ${port}`);
});