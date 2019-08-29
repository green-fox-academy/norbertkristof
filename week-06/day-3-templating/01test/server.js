const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});

app.get('/greet', (req, res) => {
    res.render('main', { name: req.query.name || 'Anonymous' });
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});