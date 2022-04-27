const express = require('express');

const app = express();

require('./db');

app.listen(process.env.PORT || 3000, () => {
  console.log('started server');
});
