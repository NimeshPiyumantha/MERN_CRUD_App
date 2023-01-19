const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 8000;
const DB_URL = 'mongodb+srv://root:1234@mernapp.bgfziqs.mongodb.net/mernCrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL).then(() => {
        console.log('DB Conncted');
    })
    .catch((err) => console.log('DB connection error.', err))

app.listen(port, () => {
    console.log(`App is running o ${port}`);
});