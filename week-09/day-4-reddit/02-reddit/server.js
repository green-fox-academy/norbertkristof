'use strict';

const app = require('./app');
const PORT = 3051;

app.listen(PORT, _ => console.log(`App is listening on ${PORT}`));
