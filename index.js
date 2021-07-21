const express = require('express');

const config = require('./config');

const app = express();

app.listen(config.app.port, () => {
    console.log(`Listen on port: ${config.app.port}`);
});
