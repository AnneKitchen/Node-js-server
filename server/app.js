const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const port = process.env.PORT || 8000;

app.use(router);

console.log('Start http server on port ' + port);

app.listen(port);
