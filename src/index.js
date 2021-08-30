const express = require ('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://udaya:udaya@cluster0.07avj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected', () => {
    console.log('connection done');
});
mongoose.connection.on('error', err => {
    console.error('Error', err);
});




app.get('/' , ( req , res ) => {
    res.send('Hi Thare');
});

app.listen(3000, () => {
    console.log('Listen port 3000');
});

