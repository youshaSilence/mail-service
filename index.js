const express = require('express');

const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/mail/', routes.mail);

app.listen(config.app.port, () => {
    console.log(`Listening on port: ${config.app.port}`);
});
