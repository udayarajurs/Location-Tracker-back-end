require('./models/User');
require('./models/Track');
const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');



const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

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




app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, () => {
    console.log('Listen port 3000');
});

