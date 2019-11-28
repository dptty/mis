const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/reports', require('./routes/index'));
  app.get('*', (req, res) => {
    // console.log(req);
    return handle(req, res); // react stuff
  });
  app.listen(PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`ready at http://localhost:${PORT}`);
  });
});
