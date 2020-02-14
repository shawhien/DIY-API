const express = require('express');
const app = express();
const db = require('./models');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('YOU HOME MF');
});

// Index - GET /videogames
app.get('/videogames', (req, res) => {
    db.videogame.findAll().then(function(videogames) {
        res.json(videogames);
    }).catch(err => {
        console.log(err)
        res.send('Just Alt+F4');
    })
});

// Create -  POST /videogames (redirect to /videogames/:id)
app.post('/videogames', (req, res) => {
    db.videoGames.findOrCreate ({
        where: {
            name: req.body.name,
        },
        defaults: {
            genre: req.body.genre,
            esrb: req.body.esrb,
            whereToPurchase: req.body.whereToPurchase
        }
    }).then(function([videogame, created]) {
        console.log(`Successfully ${created ? 'created' : 'found'} ${videogame.name}`);
        res.redirect(`/videogames/${videogame.id}`);
}).catch(err => {
    console.log(err);
    res.send('Just Alt+F4');
    })
});

//  Show  -  GET /videogames/:id
app.get('/videogames/:id', (req , res) => {
    res.send('SHOWING ONE GAME AT ID ' + req.params.id);
});

// Update - PUT /videogames/:id  (redirect to /videogames/:id)
app.get('/videogames/:id', (req, res) => {
    res.send('UPDATE GAME AT ID ' + req.params.id);
});

// Destroy  - DELETE /videogames:id (redirect to /videogames)
app.delete('/videogames/:id', (req, res) =>  {
    res.send('DELETING GAME AT ID ' + req.params.id);
});

// LISTEN: MMOS ARE THE BEST
app.listen(3000, ()  => console.log('You are officially way cooler than you were before since you have interacted with something that I made'));