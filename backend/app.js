const express = require("express");
const app = express();
const cors=require('cors')
require('dotenv').config();
require('./Db/index')
const path = require('path');
const sign=require('./Router/Signupp')
const movie = require('./Router/movie');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors())
const PORT = process.env.PORT;

app.use('/api',movie)
app.use('/api',sign)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
