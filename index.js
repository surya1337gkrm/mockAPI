const express = require('express');
//use cors to avoid cors error prblm
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
const rateLimit = require('express-rate-limit');

//Enable CORS
app.use(cors());

const limiter = rateLimit({
  //set 10 minutes - 100 requests
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.set('trust proxy', 1);

app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
