const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const { startSession } = require('./models/blogs');
require('dotenv').config();
// express app 
const app = express();

// listen for request
app.set('view engine', 'ejs'); 
app.listen(3000);
app.use(morgan('dev'));

// conntect to mongodb

const dbURI =process.env.DB_URL

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connect to db'))
  .catch((error) => console.log(error));

// middleware  $ static file 

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));

app.get('/about', (req, res) => {
  // res.send('<p>Dear Co about</>');
  // res.sendFile('./views/about.html', { root: __dirname } );
  res.render('about', {title: "About"});

});


// redirect to
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// blog route
app.use('/blogs',blogRoutes);

// 404

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname })
  res.status(404).render('404', {title: '404'});
})