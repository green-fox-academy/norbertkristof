const express = require('express');
const app = express();
const PORT = 2901;

const picture = [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

app.set('view engine', 'ejs');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('gallery', {

    })
})

app.listen(PORT, () => console.log(`app listens on ${PORT}`));