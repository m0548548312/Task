// הפעלת שרת Express

const express = require('express');
const router = require('./Routers/routing');

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

app.use('/api', router);