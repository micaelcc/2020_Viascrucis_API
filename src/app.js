const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// App
const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});



// Load models
const Stories = require('./models/stories');

const Gallery = require('./models/gallery');

const UserAdmin = require('./models/admin-user');

const BookViews = require('./models/book-views');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const storiesRoutes = require('./routes/stories-routes');
app.use('/stories', storiesRoutes);

const galleryRoutes = require('./routes/gallery-routes');
app.use('/gallery', galleryRoutes);

const contactRoutes = require('./routes/contact-routes');
app.use('/contact', contactRoutes);

const userAdminRoutes = require('./routes/admin-users-routes');
app.use('/admin', userAdminRoutes);

const bookViewsRoutes = require('./routes/book-views-routes');
app.use('/book', bookViewsRoutes);

module.exports = app;
