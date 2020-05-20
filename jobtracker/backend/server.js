
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://rjvarona:mongodb@cluster0-im7cm.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const connection = mongoose.connection;

const userRouter = require('./routes/UserRouter');
const jobRouter = require('./routes/JobRouter');

app.use('/users', userRouter);
app.use('/jobs', jobRouter);


connection.once('open', () => {
    console.log("Mongo connected");
});


app.listen(port, () => {
    console.log(`server is listening on PORT ${port}`);
});