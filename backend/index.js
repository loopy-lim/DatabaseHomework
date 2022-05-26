const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('asdf');
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});