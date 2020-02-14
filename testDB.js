const db = require('./models');

// Create
db.videogame.create({
    name: 'World of Warcraft',
    genre: 'MMORPG',
    ESRB: 'T',
    whereToPurchase: 'Battle.net'
}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log('You done messed up');
    console.log(err);
});

//  Read one game
db.videogame.findOne({
    where: {
        id: 1
    }
}).then(function(data) {
    console.log('Found game!', videogame.name);
}).catch(err => console.log(err));

// Find or Create
db.videogame.findOrCreate({
    where: {
        name: 'Final Fantasy XIV'
    },
    defaults: {
        genre: 'MMORPG',
        esrb: 'T',
        whereToPurchase: 'Mogstation'
    }
}).then(function([videogame, created]) {
    if (created) {
        console.log(`Created ${videogame.name}`);
    } else {
        console.log(`Found ${videogame.name}`);
    }
}).catch(err => console.log(err));

// Read ALL
db.videogame.findAll().then(function(videogame) {
    videogame.forEach( videogame => console.log(videogame.name));
}).catch(err  => console.log(err));

// Update
db.videogame.update ({
    name: 'Guild Wars 2',
    genre: 'MMORPG'
}, {
    where: {
        id: 1
    }
}).then(function(updated) {
    console.log(updated)
    if (updated) {
        console.log(`Successfully updated`);
    }
}).catch(err => console.log(err));

// Destroy
db.videogame.destroy({
    where: {
        name: 'WoW',
    }
}).then(function(numDeleted) {
    console.log('Alt+f4')
    console.log(numDeleted);
}).catch( err => console.log(err));