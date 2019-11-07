const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const clientRoutes = express.Router();
const PORT = 4000;

let Client = require('./client.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/clients', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

clientRoutes.route('/').get(function(req, res) {
    Client.find(function(err, clients) {
        if (err) {
            console.log(err);
        } else {
            res.json(clients);
        }
    });
});

clientRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Client.findById(id, function(err, client) {
        res.json(client);
    });
});

clientRoutes.route('/update/:id').post(function(req, res) {
    Client.findById(req.params.id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else
            client.client_firstname = req.body.client_firstname;
            client.client_familyname = req.body.client_familyname;
            client.client_mail = req.body.client_mail;
            client.client_password = req.body.client_password;

            client.save().then(client => {
                res.json('Client updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

clientRoutes.route('/add').post(function(req, res) {
    let client = new Client(req.body);
    client.save()
        .then(client => {
            res.status(200).json({'client': 'client added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new client failed');
        });
});

app.use('/clients', clientRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});