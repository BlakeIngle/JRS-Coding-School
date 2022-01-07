// const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const { HEROES } = require('./heroes');

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////
require('./app/routes/heroes.routes')(app);

// get all heroes
app.get('/api/heroes', (req, res) => {
    var heroes = HEROES.filter(
        (hero) => hero.alignment == 'hero'
    );
    res.send({ heroes: heroes });
});
app.post('/api/heroes', (req, res) => {
    // add new hero to array
    var newHero = req.body;
    if (!newHero.name || !newHero.power) {
        // problem
        res.status(404)
            .send({ error: "Hero must include a 'name' and 'power'", hero: newHero });
        return;
    }
    newHero.id = new Date().getTime();
    if (!newHero.alignment || (newHero.alignment !== 'hero' && newHero.alignment !== 'villain')) {
        // edit
        newHero.alignment = 'hero';
    }
    HEROES.push(newHero);
    res.status(201).send(newHero);
});
// get all villains
app.get('/api/villains', (req, res) => {
    var heroes = HEROES.filter(
        (hero) => hero.alignment == 'villain'
    );
    res.send({ heroes: heroes });
});

// search hero
app.get('/api/heroes/search', (req, res) => {

    function normalize(s) {
        return s
            .toLowerCase()
            .replace(' ', '')
            .replace('-', '')
            .replace(',', '')
            .replace("'", '')
            .replace('"', '');
    }

    const heroes = HEROES.filter((hero) => {

        for (let key of Object.keys(req.query)) {
            if (!normalize(hero[key])
                .includes(normalize(req.query[key]))) {
                return false;
            }
        }

        return true;
    });

    res.send({ heroes });
});
// get a hero by id
app.get('/api/heroes/:id', (req, res) => {
    var id = req.params.id;
    var hero = HEROES.find((hero) => hero.id == id);
    if (!hero) {
        res.status(404).send({ id, message: "No hero with that id exists" });
        return;
    } else {
        res.send({ hero });
    }
});
app.delete('/api/heroes/:id', (req, res) => {
    const { id } = req.params;


    HEROES.splice(HEROES.findIndex(hero => hero.id == id));

    res.status(204).send();
});
app.put('/api/heroes/:id', (req, res) => {
    const { id } = req.params;
    const updatedHero = req.body;
    console.log(id)
    // update the hero in the array
    for (let i = 0; i < HEROES.length; i++) {
        if (HEROES[i].id == id) {
            HEROES[i] = updatedHero;
            res.send({ message: "Hero updated successfully" });
            return;
        }
    }

    // still have to send the response
    res.status(404).send({ message: "Hero not updated" });

});
app.put('/api/heroes/:id/image', (req, res) => {
    const { id } = req.params;
    const { url } = req.body;

    // update the hero in the array
    for (let i = 0; i < HEROES.length; i++) {
        if (HEROES[i].id == id) {
            HEROES[i].image = url;
            res.send({ hero: HEROES[i] });
            return;
        }
    }

    // still have to send the response
    res.status(404).send({ message: "Hero not updated" });

});

////////////////////

app.listen(8080, () => {
    console.log(`Server is running on port ${8080}.`);
});