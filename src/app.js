const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Welcome to Ethan\'s node app!</h1>');
})
app.get('/about', function (req, res) {
    res.send('<h2>Welcome to Ethan\'s About Me page!</h2>');
})

app.listen(3000, () => {
    console.log('the server is now running on port 3000');
}) 
