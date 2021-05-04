const path = require('path'); // start setup for file path to link everything together
const express = require('express'); // set up express framework
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath)); // Use path to reach public assets

app.set('view engine', 'hbs'); // set up handlebar template engine

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Ethan"
    });
})

app.get('/about', function (req, res) {
    res.send('<h2>Welcome to Ethan\'s About Me page!</h2>');
})

app.listen(3000, () => {
    console.log('the server is now running on port 3000');
}) 
