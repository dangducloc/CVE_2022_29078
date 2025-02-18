//App run here
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routers/routers');
const logger = require('./utils/log').logger;

const PORT = 3000;
const HOST = '0.0.0.0';


app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

app.set("view engine", "ejs");

app.use('/', router);

app.listen(PORT,HOST, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
});