/*
 * Server.js
 ******************************/

const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 4000;

// Cors
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// Express Static (Permet de pointer un dossier static sur une URL)
// Exemple: le chemin /assets nous donnera accès au dossier public
app.use('/assets', express.static('public'));

// Body Parser qui nous permet de parser des data d'une req a une autre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Router
const ROUTER = require('./api/router')
app.use(ROUTER)

// Test
// require('./test')

// Lancement de l'application
app.listen(port, () => {
    console.log("le serveur tourne sur le port: " + port);
});