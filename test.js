"use strict";
/* interface Person {
    FirstName: string;
    LastName: string ;
}
const myPerson = {
    FirstName: "Nicolas",
    LastName: "CHARPIGNON"
}

function greeter (person:Person){
    return "hello , " + person.FirstName + " voici ton nom de famille " + person.LastName;
}


console.log(greeter(myPerson));

*/
exports.__esModule = true;
var lowdb_1 = require("lowdb");
var FileSync_1 = require("lowdb/adapters/FileSync");
// Créez un adaptateur pour votre fichier JSON de base de données
var adapter = new FileSync_1["default"]('db.json');
// Créez une instance de la base de données
var db = lowdb_1["default"](adapter);
// Utilisez le type User pour déclarer le schéma de données
var personnes = db.get('Personne');
var newPerson = { id: 1, lastname: 'Breton', firstname: 'Alexis', birthdate: 19012001 };
personnes.push(newPerson).write();
var allPersons = personnes.value();
console.log(allPersons);
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get('/', function (req, res) {
    res.send("page d'accueil");
});
app.get('/test', function (req, res) {
    res.send('ceci est un test');
});
console.log("connexion etablie");
app.listen(3000);
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());

// Créez un middleware de validation pour votre route POST/PATCH.
const validateData = [
    body('champ1').notEmpty().isString(),
    body('champ2').isInt(),
];

app.post('/votre-route', validateData, (req, res) => {
    // Vérifiez si des erreurs de validation existent.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Si les données sont valides, traitez-les ici.
    // req.body contient les données soumises par le client.
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
